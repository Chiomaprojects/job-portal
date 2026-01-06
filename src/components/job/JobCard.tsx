import { Link } from "react-router-dom";


interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
}

const JobCard = ({ id, title, company, location, type, salary}: JobCardProps) => {
return(
 <div className="mx-4 border rounded-lg p-5 shadow-sm bg- white hover:shadow-md transition mb-4">
  <h3 className="text-lg font-bold text-gray-800">{title}</h3>
  <p className="text-gray-600 mt-1">{company}</p>

  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
    <span>{location}</span>
    <span className="text-blue-600 font-medium">{type}</span>
  </div>

  {salary && (
    <p className="mt-2 text-gray-700 font-medium">₦{salary}</p>
  )}

  <Link
  to={`/jobs/${id}`}
  className="block mt-4 text-blue-600 font-medium hover:underline">
    View Details →
  </Link>
 </div>
);
};

export default JobCard;