import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import JobForm from "../../components/admin/JobForm";
import type { Job } from "../../types/job.types";

const EditJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const job = useSelector((state: RootState) =>
    state.jobs.jobs.find(j => j.id === id)
  );

  if (!job) return <p>Job not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Job</h1>
      <JobForm
        initialData={job}
        onSubmit={(updated: Job) => {
          navigate("/admin/jobs");
        }}
      />
    </div>
  );
};

export default EditJob;