export interface Application {
  id: string;
  jobId: string;
  applicantName: string;
  applicantEmail: string;
  resume: string; // file name (for now)
  coverLetter: string;
  status: "applied" | "reviewed" | "interview" | "rejected" | "accepted";
  appliedAt: string;
}