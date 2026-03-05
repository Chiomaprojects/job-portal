

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary?: string;
  description?: string;
}

// export interface Props {
//   initialData?: Job;
//   onSubmit: (job: Job) => void;
// }