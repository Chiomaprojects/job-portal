import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Application } from "../types/application";
import { getApplicants, createApplicant, removeApplicant, editApplicant } from "../api/applicantsApi";

interface ApplicationState {
  applications: Application[];
  loading: boolean;
  error: string | null;
}

const initialState: ApplicationState = {
  applications: [],
  loading: false,
  error: null,
};


const fetchApplicants = createAsyncThunk(
  "applications/fetchApplicants",
  async () => {
    return await getApplicants();
  }
);    

const applyForJob = createAsyncThunk(
  "applications/applyForJob",
  async (applicant: Application) => {
    return await createApplicant(applicant);
  }
);    

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchApplicants.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchApplicants.fulfilled, (state, action) => {
      state.loading = false;
      state.applications = action.payload;
    })
    .addCase(fetchApplicants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch applications";
    })
      .addCase(applyForJob.pending, (state) => {    
        state.loading = true;
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })
      .addCase(applyForJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to apply for job";
      });     
  },
});

export default applicationSlice.reducer;
export { fetchApplicants, createApplicant, removeApplicant, editApplicant, applyForJob };    