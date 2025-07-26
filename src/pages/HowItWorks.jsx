const HowItWorks = () => {
  const steps = [
    "Enter your basic information",
    "Add your experience, skills, and education",
    "Click generate and instantly download your resume"
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="bg-white shadow-md p-6 rounded-xl">
            <strong className="text-emerald-500">Step {index + 1}:</strong> {step}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;