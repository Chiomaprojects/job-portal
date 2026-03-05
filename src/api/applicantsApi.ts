import type { Application } from "../types/application";


const APPLICANTS_KEY = "applicants";

export const getApplicants = async (): Promise<Application[]> => {
  return JSON.parse(localStorage.getItem(APPLICANTS_KEY) || "[]");
};    

export const createApplicant = async (applicant: Application): Promise<Application> => {
  const applicants = await getApplicants();
  applicants.push(applicant);
  localStorage.setItem(APPLICANTS_KEY, JSON.stringify(applicants));
  return applicant;
};

export const removeApplicant = async (applicantId: string): Promise<string> => {
  const applicants = await getApplicants();
  const updatedApplicants = applicants.filter((applicant) => applicant.id !== applicantId);
  localStorage.setItem(APPLICANTS_KEY, JSON.stringify(updatedApplicants));
  return applicantId;
};    

export const editApplicant = async (updatedApplicant: Application): Promise<Application> => {
  const applicants = await getApplicants();
  const index = applicants.findIndex((applicant) => applicant.id === updatedApplicant.id);      
  if (index !== -1) {
    applicants[index] = updatedApplicant;
    localStorage.setItem(APPLICANTS_KEY, JSON.stringify(applicants));
  }     
  return updatedApplicant;
};  

export const getApplicantsByJobId = async (jobId: string): Promise<Application[]> => {
  const applicants = await getApplicants();
  return applicants.filter((applicant) => applicant.jobId === jobId);
};  

