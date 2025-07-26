const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-6 sm:px-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#0F4C5C]">About This Resume Generator</h2>
      
      <p className="text-lg leading-relaxed mb-6">
        This Resume Generator is a simple, fast, and user-friendly web app designed to help anyone create a professional, well-structured resume in minutes — no design skills required!
      </p>

      <p className="text-base leading-relaxed text-gray-600">
        Built using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, it lets you add all standard sections like education, experience, certifications, and even your passport-sized photo.
        You can instantly preview and download your resume in PDF format with a clean MS Word-style layout.
      </p>

      {/* Privacy & Terms Notice */}
      <div className="mt-10 bg-gray-100 p-6 rounded-md text-left shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-[#0F4C5C]">🔒 Privacy & Data Policy</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Your privacy is important to us. All data you enter — including your personal details, experience, and profile picture — is processed entirely in your browser. 
          <strong> Nothing is stored or sent to any server.</strong> Your information remains completely private and disappears when you refresh or close the page.
          Even the developer of this website cannot access your information.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-500">Made with ❤️ by <span className="font-semibold text-[#0F4C5C]">Miaad Asjad</span></p>
        <a
          href="www.linkedin.com/in/miaad-asjad-853430353"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-[#0F4C5C] hover:underline"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
