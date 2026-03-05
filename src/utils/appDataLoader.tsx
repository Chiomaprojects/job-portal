import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobSlice";
import { fetchApplicants } from "../store/applicationSlice";
import { fetchUsers } from "../store/userSlice";
import type { RootState, AppDispatch } from "../store/store";

type Props = {
  children: React.ReactNode;
};  

export default function AppDataLoader({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { applications } = useSelector((state: RootState) => state.applications);
  const { users } = useSelector((state: RootState) => state.users); 

  useEffect(() => {
    if (jobs.length === 0) {
      dispatch(fetchJobs());
    }
    if (applications.length === 0) {
      dispatch(fetchApplicants());
    }   
    if (users.length === 0) {
      dispatch(fetchUsers());
    } 

  }, [dispatch, jobs.length, applications.length, users.length ]);

  return <>{children}</>;
}   


