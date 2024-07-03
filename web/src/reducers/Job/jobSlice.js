import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance, secureInstance } from "../../axios/config";

const initialState = {
  jobs: [],
  count: 0,
  selectedJob: null,
  loading: false,
  message: {
    type: "Error",
    title: null,
  },
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (data, { rejectWithValue }) => {
    try {
      let url = "/api/jobs";
      if (data) {
        if (data.limit) {
          url += `?limit=${data.limit}&offset=${data.offset || 0}`;

          if (data.search) {
            url += `&search=${data.search}`;
          }
        }
      }
      const response = await secureInstance.request({
        url,
        method: "GET",
      });

      return data && data?.limit
        ? { ...response.data, limit: data?.limit }
        : response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/jobs/${jobId}`,
        method: "GET",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createJob = createAsyncThunk(
  "jobs/createJob",
  async ({ data, router }, { rejectWithValue }) => {
    try {
      const response = await instance.request({
        url: `/api/jobs/`,
        method: "POST",
        data,
      });

      return { ...response.data, router };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ jobId, data, router }, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/jobs/${jobId}`,
        method: "PATCH",
        data,
      });

      return { ...response.data, router };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteJob = createAsyncThunk(
  "jobs/deleteJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/jobs/${jobId}`,
        method: "DELETE",
      });

      return { ...response.data, jobId };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const bulkDeleteJob = createAsyncThunk(
  "jobs/bulkDeleteJob",
  async (ids, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/jobs/bulk-delete`,
        method: "DELETE",
        data: { ids },
      });

      return { ...response.data, ids };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    setJobMessage: (state, action) => {
      state.message.title = action.payload.title;
      state.message.type = action.payload.type;
    },
    resetJobMessage: (state) => {
      state.message = {
        type: "Error",
        title: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.limit) {
          const { results, count } = action.payload.data;
          state.jobs = results || [];
          state.count = count;
        } else {
          state.jobs = action.payload.data || [];
        }
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(fetchJobById.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedJob = action.payload.data;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        const { router } = action.payload;
        if (state.jobs.length < 10) state.jobs.push(action.payload.data);
        state.count = state.count + 1;
        state.message.title = action.payload.message;
        state.message.type = "Success";
        router.push("/admin/jobs");
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        const { router } = action.payload;
        const updatedJobIndex = state.jobs.findIndex(
          (job) => job.id === action.payload.data.id
        );
        if (updatedJobIndex !== -1) {
          state.jobs[updatedJobIndex] = action.payload.data;
        }
        state.message.title = action.payload.message;
        state.message.type = "Success";
        router.push("/admin/jobs");
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter(
          (job) => job.id !== action.payload.jobId
        );
        state.message.title = action.payload.message;
        state.message.type = "Success";
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(bulkDeleteJob.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(bulkDeleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter(
          (job) => !action.payload.ids.includes(job.id)
        );
        state.count = state.count - action.payload.ids.length;
        state.message.title = action.payload.message;
        state.message.type = "Success";
      })
      .addCase(bulkDeleteJob.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      });
  },
});

export const { setSelectedJob, setJobMessage, resetJobMessage } =
  jobSlice.actions;

export default jobSlice.reducer;
