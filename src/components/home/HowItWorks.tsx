const steps = [
  { title: "Search Jobs", desc: "Browse thousands of verified listings" },
  { title: "Apply", desc: "Submit your application in minutes" },
  { title: "Get Hired", desc: "Connect with top employers" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.title} className="bg-white p-8 rounded-xl shadow">
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="mt-4 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;