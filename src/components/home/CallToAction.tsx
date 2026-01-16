import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Ready to Take the Next Step?
      </h2>

      <p className="mt-4 text-lg">
        Create an account and start applying today.
      </p>

      <Link
        to="/signup"
        className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
      >
        Get Started
      </Link>
    </section>
  );
};

export default CallToAction;