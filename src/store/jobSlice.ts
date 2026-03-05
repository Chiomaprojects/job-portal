// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";


// export interface Job {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   type: string;
//   description: string;
// }

// interface JobsState {
//   jobs: Job[];
// }

// const initialState: JobsState = {
//   jobs: [],
// };

// const jobsSlice = createSlice({
//   name: "jobs",
//   initialState,
//   reducers: {
//     addJob: (state, action: PayloadAction<Job>) => {
//       state.jobs.push(action.payload)
//     },
//     updateJob: (state, action: PayloadAction<Job>) => {
//       const index = state.jobs.findIndex(j => j.id === action.payload.id);
//       if (index !== -1) state.jobs[index] = action.payload;
//     },
//     deleteJob: (state, action: PayloadAction<string>) => {
//      state.jobs = state.jobs.filter(j => j.id !== action.payload);
//     },
//   },
// });

// export const { addJob, updateJob, deleteJob } = jobsSlice.actions;
// export default jobsSlice.reducer;






import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Job } from "../types/job.types";
import { getJobs, createJob, removeJob, editJob } from "../api/jobsApi";

// export interface Job {
//    id: string;
//    title: string;
//    salary: number;
//    company: string;
//    location: string;
//    type: string;
//    description: string;
//  }
interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs:[],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async() => {
    return await getJobs();
  }
);

export const addJob = createAsyncThunk(
  "jobs/addJob",
  async (job: Job) => {
    return await createJob(job);
  }
);

export const deleteJob = createAsyncThunk(
  "jobs/deleteJob",
  async (jobId: string, thunkAPI) => {      
    try {
      // Simulate API call delay
      return await removeJob(jobId);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }       
  }
);  

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async (job: Job, thunkAPI) => {     
    try {
      return await editJob(job);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }     
  }
);    

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers:  {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    })
    .addCase(fetchJobs.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to load jobs";
    })
    .addCase(addJob.pending, (state, action) => {
        state.loading = true;
      })
    .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
    .addCase(addJob.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to add job";
      })
   .addCase(deleteJob.pending, (state, action) => {
        state.loading = true;
      })
   .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job.id !== action.payload);
        state.loading = false;
      })
   .addCase(deleteJob.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to delete job";
      })
    .addCase(updateJob.pending, (state, action) => {
        state.loading = true;
      })          
    .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex(j => j.id === action.payload.id);    
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }   
        state.loading = false;
      })          
    .addCase(updateJob.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update job";
      });     
  },
});

export default jobsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// interface Job {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
// }

// interface JobsState {
//   jobs: Job[];
// }

// const initialState: JobsState = {
//   jobs: [],
// };

// const jobSlice = createSlice({
//   name: "jobs",
//   initialState,
//   reducers: {
//     addJob: (state, action: PayloadAction<Job>) => {
//       state.jobs.push(action.payload);
//     },
//     deleteJob: (state, action: PayloadAction<string>) => {
//       state.jobs = state.jobs.filter(
//         job => job.id !== action.payload
//       );
//     },
//     updateJob: (state, action: PayloadAction<Job>) => {
//       const index = state.jobs.findIndex(
//         job => job.id === action.payload.id
//       );
//       if (index !== -1) {
//         state.jobs[index] = action.payload;
//       }
//     },
//   },
// });

// export const { addJob, deleteJob, updateJob } = jobSlice.actions;
// export default jobSlice.reducer;
