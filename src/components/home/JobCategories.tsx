import { Link } from "react-router-dom";

const categories = [
  "Engineering",
  "Design",
  "Marketing",
  "Finance",
  "Healthcare",
  "Education",
];

const JobCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">
          Popular Job Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/jobs/category/${category.toLowerCase()}`}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center font-medium"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;