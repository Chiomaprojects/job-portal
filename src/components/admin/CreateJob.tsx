import { useDispatch } from "react-redux";
import { addJob } from "../../store/jobSlice";
import type { Job } from "../../types/job.types";
import { useNavigate } from "react-router-dom";
import JobForm from "../../components/admin/JobForm";
import { nanoid } from "@reduxjs/toolkit";
import type { AppDispatch } from "../../store/store";



const CreateJob = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Job</h1>
      <JobForm
        onSubmit={(job: Job) => {
          dispatch(addJob({ ...job, id: nanoid() }));
          navigate("/admin/jobs");
        }}
      />
    </div>
  );
};

export default CreateJob;