import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance, secureInstance } from "../../axios/config";

const initialState = {
  blogs: [],
  count: 0,
  selectedBlog: null,
  loading: false,
  message: {
    type: "Error",
    title: null,
  },
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (data, { rejectWithValue }) => {
    try {
      let url = "/api/blogs";
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

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (blogId, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/blogs/${blogId}`,
        method: "GET",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async ({ data, router }, { rejectWithValue }) => {
    try {
      const response = await instance.request({
        url: `/api/blogs/`,
        method: "POST",
        data,
      });

      return { ...response.data, router };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ blogId, data, router }, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/blogs/${blogId}`,
        method: "PATCH",
        data,
      });

      return { ...response.data, router };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (blogId, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/blogs/${blogId}`,
        method: "DELETE",
      });

      return { ...response.data, blogId };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const bulkDeleteBlog = createAsyncThunk(
  "blogs/bulkDeleteBlog",
  async (ids, { rejectWithValue }) => {
    try {
      const response = await secureInstance.request({
        url: `/api/blogs/bulk-delete`,
        method: "DELETE",
        data: { ids },
      });

      return { ...response.data, ids };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
    },
    setBlogMessage: (state, action) => {
      state.message.title = action.payload.title;
      state.message.type = action.payload.type;
    },
    resetBlogMessage: (state) => {
      state.message = {
        type: "Error",
        title: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.limit) {
          const { results, count } = action.payload.data;
          state.blogs = results || [];
          state.count = count;
        } else {
          state.blogs = action.payload.data || [];
        }
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload.data;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        const { router } = action.payload;
        if (state.blogs.length < 10) state.blogs.push(action.payload.data);
        state.count = state.count + 1;
        state.message.title = action.payload.message;
        state.message.type = "Success";
        router.push("/admin/blogs");
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        const { router } = action.payload;
        const updatedBlogIndex = state.blogs.findIndex(
          (blog) => blog.id === action.payload.data.id
        );
        if (updatedBlogIndex !== -1) {
          state.blogs[updatedBlogIndex] = action.payload.data;
        }
        state.message.title = action.payload.message;
        state.message.type = "Success";
        router.push("/admin/blogs");
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(
          (blog) => blog.id !== action.payload.blogId
        );
        state.message.title = action.payload.message;
        state.message.type = "Success";
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      })
      .addCase(bulkDeleteBlog.pending, (state) => {
        state.loading = true;
        state.message.title = null;
      })
      .addCase(bulkDeleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(
          (blog) => !action.payload.ids.includes(blog.id)
        );
        state.count = state.count - action.payload.ids.length;
        state.message.title = action.payload.message;
        state.message.type = "Success";
      })
      .addCase(bulkDeleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.message.title = action.payload;
        state.message.type = "Error";
      });
  },
});

export const { setSelectedBlog, setBlogMessage, resetBlogMessage } =
  blogSlice.actions;

export default blogSlice.reducer;
