import type { Job } from "../types/job.types";


const JOBS_KEY = "jobs";

export const getJobs = async (): Promise<Job[]> => {
  return JSON.parse(localStorage.getItem(JOBS_KEY) || "[]");
};

export const createJob = async (job: Job): Promise<Job> => {
  const jobs = await getJobs();
  jobs.push(job);
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
  return job;
};

export const removeJob = async (jobId: string): Promise<string> => {
  const jobs = await getJobs();
  const updatedJobs = jobs.filter((job) => job.id !== jobId);
  localStorage.setItem(JOBS_KEY, JSON.stringify(updatedJobs));
  return jobId;
};

export const editJob = async (updatedJob: Job): Promise<Job> => {
  const jobs = await getJobs();
  const index = jobs.findIndex((job) => job.id === updatedJob.id);    
  if (index !== -1) {
    jobs[index] = updatedJob;
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
  } 
  return updatedJob;
};  

export const getJobById = async (jobId: string): Promise<Job | null> => {
  const jobs = await getJobs();
  return jobs.find((job) => job.id === jobId) || null;
};  

