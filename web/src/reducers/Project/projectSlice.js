// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { instance, secureInstance } from "../../axios/config";

// const initialState = {
//   projects: [],
//   count: 0,
//   selectedProject: null,
//   loading: false,
//   message: {
//     type: "Error",
//     title: null,
//   },
// };

// export const fetchProjects = createAsyncThunk(
//   "projects/fetchProjects",
//   async (data, { rejectWithValue }) => {
//     try {
//       let url = "/api/projects";
//       if (data) {
//         if (data.limit) {
//           url += `?limit=${data.limit}&offset=${data.offset || 0}`;

//           if (data.search) {
//             url += `&search=${data.search}`;
//           }
//         }
//       }
//       const response = await secureInstance.request({
//         url,
//         method: "GET",
//       });

//       return data && data?.limit
//         ? { ...response.data, limit: data?.limit }
//         : response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const fetchProjectById = createAsyncThunk(
//   "projects/fetchProjectById",
//   async (projectId, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/projects/${projectId}`,
//         method: "GET",
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createProject = createAsyncThunk(
//   "projects/createProject",
//   async ({ data, router }, { rejectWithValue }) => {
//     try {
//       const response = await instance.request({
//         url: `/api/projects/`,
//         method: "POST",
//         data,
//       });

//       return { ...response.data, router };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateProject = createAsyncThunk(
//   "projects/updateProject",
//   async ({ projectId, data, router }, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/projects/${projectId}`,
//         method: "PATCH",
//         data,
//       });

//       return { ...response.data, router };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteProject = createAsyncThunk(
//   "projects/deleteProject",
//   async (projectId, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/projects/${projectId}`,
//         method: "DELETE",
//       });

//       return { ...response.data, projectId };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const bulkDeleteProject = createAsyncThunk(
//   "projects/bulkDeleteProject",
//   async (ids, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/projects/bulk-delete`,
//         method: "DELETE",
//         data: { ids },
//       });

//       return { ...response.data, ids };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const projectSlice = createSlice({
//   name: "projects",
//   initialState,
//   reducers: {
//     setSelectedProject: (state, action) => {
//       state.selectedProject = action.payload;
//     },
//     setProjectMessage: (state, action) => {
//       state.message.title = action.payload.title;
//       state.message.type = action.payload.type;
//     },
//     resetProjectMessage: (state) => {
//       state.message = {
//         type: "Error",
//         title: null,
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProjects.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(fetchProjects.fulfilled, (state, action) => {
//         state.loading = false;
//         if (action.payload.limit) {
//           const { results, count } = action.payload.data;
//           state.projects = results || [];
//           state.count = count;
//         } else {
//           state.projects = action.payload.data || [];
//         }
//       })
//       .addCase(fetchProjects.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(fetchProjectById.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(fetchProjectById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.selectedProject = action.payload.data;
//       })
//       .addCase(fetchProjectById.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(createProject.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(createProject.fulfilled, (state, action) => {
//         state.loading = false;
//         const { router } = action.payload;
//         if (state.projects.length < 10)
//           state.projects.push(action.payload.data);
//         state.count = state.count + 1;
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//         router.push("/admin/projects");
//       })
//       .addCase(createProject.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(updateProject.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(updateProject.fulfilled, (state, action) => {
//         state.loading = false;
//         const { router } = action.payload;
//         const updatedProjectIndex = state.projects.findIndex(
//           (project) => project.id === action.payload.data.id
//         );
//         if (updatedProjectIndex !== -1) {
//           state.projects[updatedProjectIndex] = action.payload.data;
//         }
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//         router.push("/admin/projects");
//       })
//       .addCase(updateProject.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(deleteProject.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(deleteProject.fulfilled, (state, action) => {
//         state.loading = false;
//         state.projects = state.projects.filter(
//           (project) => project.id !== action.payload.projectId
//         );
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//       })
//       .addCase(deleteProject.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(bulkDeleteProject.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(bulkDeleteProject.fulfilled, (state, action) => {
//         state.loading = false;
//         state.projects = state.projects.filter(
//           (project) => !action.payload.ids.includes(project.id)
//         );
//         state.count = state.count - action.payload.ids.length;
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//       })
//       .addCase(bulkDeleteProject.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       });
//   },
// });

// export const { setSelectedProject, setProjectMessage, resetProjectMessage } =
//   projectSlice.actions;

// export default projectSlice.reducer;
