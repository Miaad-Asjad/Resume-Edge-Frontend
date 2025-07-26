import { useState } from "react";

const ResumeGenerator = ({ onChange, onGenerate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    skills: [""],
    languages: [""],
    experience: [{ company: "", role: "", duration: "" }],
    education: [{ institute: "", degree: "", year: "" }],
    certifications: [{ title: "", issuer: "" }],
    profilePicture: null,
  });

  const handleChange = (e, field, index, subField) => {
    const updatedForm = { ...formData };

    if (field === "profilePicture") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          updatedForm.profilePicture = reader.result;
          setFormData(updatedForm);
          onChange(updatedForm);
        };
        reader.readAsDataURL(file);
      }
      return;
    }

    if (Array.isArray(updatedForm[field])) {
      if (typeof updatedForm[field][0] === "string") {
        updatedForm[field][index] = e.target.value;
      } else {
        updatedForm[field][index][subField] = e.target.value;
      }
    } else {
      updatedForm[field] = e.target.value;
    }

    setFormData(updatedForm);
    onChange(updatedForm);
  };

  const renderInput = (value, placeholder, onChange) => (
    <input
      className="input w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

  const addField = (field, defaultValue) => {
    const updated = { ...formData };
    updated[field].push(defaultValue);
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="min-h-screen bg-[#F4EBD0] px-4 py-8 flex flex-col">
      <div className="bg-[#F4EBD0] p-6 rounded-lg shadow-md max-w-4xl w-full mx-auto flex-grow">
        {/* Profile Picture Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Upload Profile Picture (Passport Size)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(e, "profilePicture")}
            className="mt-1"
          />
          {formData.profilePicture && (
            <img
              src={formData.profilePicture}
              alt="Preview"
              className="mt-2 w-24 h-24 object-cover rounded-md shadow"
            />
          )}
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInput(formData.fullName, "Full Name", (e) => handleChange(e, "fullName"))}
          {renderInput(formData.email, "Email", (e) => handleChange(e, "email"))}
          {renderInput(formData.phone, "Phone", (e) => handleChange(e, "phone"))}
          {renderInput(formData.address, "Address", (e) => handleChange(e, "address"))}
        </div>

        <textarea
          className="input w-full mt-4"
          placeholder="Objective"
          value={formData.summary}
          onChange={(e) => handleChange(e, "summary")}
        />

        {/* Skills */}
        <div className="mt-4">
          <h3 className="section-heading">Skills</h3>
          {formData.skills.map((skill, i) =>
            renderInput(skill, `Skill ${i + 1}`, (e) => handleChange(e, "skills", i))
          )}
          <button onClick={() => addField("skills", "")} className="btn mt-2">
            + Add Skill
          </button>
        </div>

        {/* Languages */}
        <div className="mt-4">
          <h3 className="section-heading">Languages</h3>
          {formData.languages.map((lang, i) =>
            renderInput(lang, `Language ${i + 1}`, (e) => handleChange(e, "languages", i))
          )}
          <button onClick={() => addField("languages", "")} className="btn mt-2">
            + Add Language
          </button>
        </div>

        {/* Experience */}
        <div className="mt-4">
          <h3 className="section-heading">Experience</h3>
          {formData.experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {renderInput(exp.company, "Company", (e) => handleChange(e, "experience", i, "company"))}
              {renderInput(exp.role, "Role", (e) => handleChange(e, "experience", i, "role"))}
              {renderInput(exp.duration, "Duration", (e) => handleChange(e, "experience", i, "duration"))}
            </div>
          ))}
          <button
            onClick={() => addField("experience", { company: "", role: "", duration: "" })}
            className="btn mt-2"
          >
            + Add Experience
          </button>
        </div>

        {/* Certifications */}
        <div className="mt-4">
          <h3 className="section-heading">Certifications</h3>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {renderInput(cert.title, "Certification Title", (e) => handleChange(e, "certifications", i, "title"))}
              {renderInput(cert.issuer, "Issuer", (e) => handleChange(e, "certifications", i, "issuer"))}
            </div>
          ))}
          <button
            onClick={() => addField("certifications", { title: "", issuer: "" })}
            className="btn mt-2"
          >
            + Add Certification
          </button>
        </div>

        {/* Education */}
        <div className="mt-4">
          <h3 className="section-heading">Education</h3>
          {formData.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {renderInput(edu.institute, "Institute", (e) => handleChange(e, "education", i, "institute"))}
              {renderInput(edu.degree, "Degree", (e) => handleChange(e, "education", i, "degree"))}
              {renderInput(edu.year, "Year", (e) => handleChange(e, "education", i, "year"))}
            </div>
          ))}
          <button
            onClick={() => addField("education", { institute: "", degree: "", year: "" })}
            className="btn mt-2"
          >
            + Add Education
          </button>
        </div>

        {/* Generate Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onGenerate}
            className="bg-[#0F4C5C] text-white px-4 py-2 rounded hover:bg-[#0d3a45]"
          >
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator;

