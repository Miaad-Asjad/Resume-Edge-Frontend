const ResumePreview = ({ data, resumeRef }) => {
const renderBulletList = (items) => (
  <ul className="pl-5 space-y-1">
    {items.filter(Boolean).map((item, i) => (
      <li key={i} className="flex gap-3 items-center">
        <span
          className="text-[14pt] font-bold text-[#333] leading-[1]"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          •
        </span>
        <span className="block leading-[1.6]">{item}</span>
      </li>
    ))}
  </ul>
);
  

  return (
    <div className="bg-white min-h-screen p-4 flex justify-center items-start overflow-auto">
      <div
        ref={resumeRef}
        className="bg-white text-black shadow-md w-full max-w-[816px] md:w-[816px]"
        style={{
          minHeight: "1056px",
          padding: "48px",
          fontFamily: "Arial, sans-serif",
          fontSize: "11pt",
          lineHeight: "1.8",
          wordBreak: "break-word",
          whiteSpace: "normal",
        }}
      >
        {/* Header Section with Image */}
        <div className="flex justify-between items-start mb-6">
          {/* Personal Info */}
          <div className="w-2/3 pr-6">
            <h2 className="text-[18pt] font-bold mb-2">Personal Information</h2>
            <div className="space-y-1 text-justify">
              {data.fullName && <p><strong>Name:</strong> {data.fullName}</p>}
              {data.email && <p><strong>Email:</strong> {data.email}</p>}
              {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
              {data.address && <p><strong>Address:</strong> {data.address}</p>}
            </div>
          </div>

          {/* Profile Image */}
          {data.profilePicture && (
            <div className="w-[135px] h-[140px] border rounded overflow-hidden">
              <img
                src={data.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Objective */}
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-[18pt] font-bold mb-2">Objective</h2>
            <p className="text-justify leading-[1.8]">{data.summary}</p>

          </section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[18pt] font-bold mb-2">Skills</h2>
            {renderBulletList(data.skills)}
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[18pt] font-bold mb-2">Experience</h2>
            {renderBulletList(
              data.experience
                .filter((exp) => exp.company && exp.role && exp.duration)
                .map(
                  (exp) =>
                    `${exp.company} – ${exp.role}, ${exp.duration}`
                )
            )}
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[18pt] font-bold mb-2">Education</h2>
            {renderBulletList(
              data.education
                .filter((edu) => edu.institute && edu.degree && edu.year)
                .map(
                  (edu) =>
                    `${edu.institute} – ${edu.degree}, ${edu.year}`
                )
            )}
          </section>
        )}

        {/* Languages */}
        {data.languages?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[18pt] font-bold mb-2">Languages</h2>
            {renderBulletList(data.languages)}
          </section>
        )}

        {/* Certifications */}
        {data.certifications?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[18pt] font-bold mb-2">Certifications</h2>
            {renderBulletList(
              data.certifications
                .filter((cert) => cert.title && cert.issuer)
                .map((cert) => `${cert.title} – ${cert.issuer}`)
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
