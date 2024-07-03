// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { instance, secureInstance } from "../../axios/config";

// const initialState = {
//   courses: [],
//   count: 0,
//   selectedCourse: null,
//   loading: false,
//   message: {
//     type: "Error",
//     title: null,
//   },
// };

// export const fetchCourses = createAsyncThunk(
//   "courses/fetchCourses",
//   async (data, { rejectWithValue }) => {
//     try {
//       let url = "/api/courses";
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

// export const fetchCourseById = createAsyncThunk(
//   "courses/fetchCourseById",
//   async (courseId, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/courses/${courseId}`,
//         method: "GET",
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createCourse = createAsyncThunk(
//   "courses/createCourse",
//   async ({ data, router }, { rejectWithValue }) => {
//     try {
//       const response = await instance.request({
//         url: `/api/courses/`,
//         method: "POST",
//         data,
//       });

//       return { ...response.data, router };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateCourse = createAsyncThunk(
//   "courses/updateCourse",
//   async ({ courseId, data, router }, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/courses/${courseId}`,
//         method: "PATCH",
//         data,
//       });

//       return { ...response.data, router };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteCourse = createAsyncThunk(
//   "courses/deleteCourse",
//   async (courseId, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/courses/${courseId}`,
//         method: "DELETE",
//       });

//       return { ...response.data, courseId };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const bulkDeleteCourse = createAsyncThunk(
//   "courses/bulkDeleteCourse",
//   async (ids, { rejectWithValue }) => {
//     try {
//       const response = await secureInstance.request({
//         url: `/api/courses/bulk-delete`,
//         method: "DELETE",
//         data: { ids },
//       });

//       return { ...response.data, ids };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const courseSlice = createSlice({
//   name: "courses",
//   initialState,
//   reducers: {
//     setSelectedCourse: (state, action) => {
//       state.selectedCourse = action.payload;
//     },
//     setCourseMessage: (state, action) => {
//       state.message.title = action.payload.title;
//       state.message.type = action.payload.type;
//     },
//     resetCourseMessage: (state) => {
//       state.message = {
//         type: "Error",
//         title: null,
//       };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCourses.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.loading = false;
//         if (action.payload.limit) {
//           const { results, count } = action.payload.data;
//           state.courses = results || [];
//           state.count = count;
//         } else {
//           state.courses = action.payload.data || [];
//         }
//       })
//       .addCase(fetchCourses.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(fetchCourseById.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(fetchCourseById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.selectedCourse = action.payload.data;
//       })
//       .addCase(fetchCourseById.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(createCourse.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(createCourse.fulfilled, (state, action) => {
//         state.loading = false;
//         const { router } = action.payload;
//         if (state.courses.length < 10) state.courses.push(action.payload.data);
//         state.count = state.count + 1;
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//         router.push("/admin/courses");
//       })
//       .addCase(createCourse.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(updateCourse.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(updateCourse.fulfilled, (state, action) => {
//         state.loading = false;
//         const { router } = action.payload;
//         const updatedCourseIndex = state.courses.findIndex(
//           (course) => course.id === action.payload.data.id
//         );
//         if (updatedCourseIndex !== -1) {
//           state.courses[updatedCourseIndex] = action.payload.data;
//         }
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//         router.push("/admin/courses");
//       })
//       .addCase(updateCourse.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(deleteCourse.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(deleteCourse.fulfilled, (state, action) => {
//         state.loading = false;
//         state.courses = state.courses.filter(
//           (course) => course.id !== action.payload.courseId
//         );
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//       })
//       .addCase(deleteCourse.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       })
//       .addCase(bulkDeleteCourse.pending, (state) => {
//         state.loading = true;
//         state.message.title = null;
//       })
//       .addCase(bulkDeleteCourse.fulfilled, (state, action) => {
//         state.loading = false;
//         state.courses = state.courses.filter(
//           (course) => !action.payload.ids.includes(course.id)
//         );
//         state.count = state.count - action.payload.ids.length;
//         state.message.title = action.payload.message;
//         state.message.type = "Success";
//       })
//       .addCase(bulkDeleteCourse.rejected, (state, action) => {
//         state.loading = false;
//         state.message.title = action.payload;
//         state.message.type = "Error";
//       });
//   },
// });

// export const { setSelectedCourse, setCourseMessage, resetCourseMessage } =
//   courseSlice.actions;

// export default courseSlice.reducer;
