import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobSlice";
import { fetchApplicants } from "../store/applicationSlice";
import { fetchUsers } from "../store/userSlice";
import type { RootState, AppDispatch } from "../store/store";
import { login } from "../store/authSlice";

type Props = {
  children: React.ReactNode;
};  

export default function AppDataLoader({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { applications } = useSelector((state: RootState) => state.applications);
  const { users } = useSelector((state: RootState) => state.users); 
  // const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (jobs.length === 0) { // Only fetch jobs if they haven't been loaded yet
      dispatch(fetchJobs());
    }
    if (applications.length === 0) { // Only fetch applications if they haven't been loaded yet
      dispatch(fetchApplicants());
    }   
    if (users.length === 0) { // Only fetch users if they haven't been loaded yet 
      dispatch(fetchUsers());
    } 

  }, [dispatch, jobs.length, applications.length, users.length ]); // Add dependencies to ensure data is fetched when the component mounts

  return <>{children}</>; // Render children components once data is loaded
}   


