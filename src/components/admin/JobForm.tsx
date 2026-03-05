import { useState } from "react";
import type { Job } from "../../types/job.types";




const JobForm = ({ initialData, onSubmit }: { initialData?: Job; onSubmit: (job: Job) => void }) => {
  const [form, setForm] = useState<Job>(
    initialData || {
      id: "",
      title: "",
      company: "",
      location: "",
      type: "",
      description: "",
      salary: "",
      category: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4 max-w-xl"
    >
      <input name="title" placeholder="Job Title" onChange={handleChange} value={form.title} 
      className="border p-1 rounded-lg md:col-span-3 mr-2"/>
      <input name="company" placeholder="Company" onChange={handleChange} value={form.company} 
      className="border p-1 rounded-lg md:col-span-3"/>
      <input name="location" placeholder="Location" onChange={handleChange} value={form.location} 
      className="border p-1 rounded-lg md:col-span-3 mr-2"/>
      <input name="type" placeholder="Type" onChange={handleChange} value={form.type} 
      className="border p-1 rounded-lg md:col-span-3"/>
      <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} 
      className="w-full border p-3 rounded-lg flex md:col-span-3"/>
      
      <button className="btn-primary !bg-blue-600 text-white">Save Job</button>
    </form>
  );
};

export default JobForm;