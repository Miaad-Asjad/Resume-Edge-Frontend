import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResumeGenerator from "../components/ResumeGenerator";
import ResumePreview from "../components/ResumePreview";

const GenerateResume = () => {
  const [formInputData, setFormInputData] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const previewRef = useRef(null);

  const handleChange = (data) => {
    setFormInputData(data);
  };

  const handleGenerate = () => {
    setResumeData(formInputData);
  };

  const handleDownload = () => {
    const input = previewRef.current;
    if (!input) return;

    const cleanUnsupportedColors = (el) => {
      const elements = el.querySelectorAll("*");
      elements.forEach((node) => {
        const computed = window.getComputedStyle(node);
        if (computed.color.includes("oklch")) node.style.color = "#000";
        if (computed.backgroundColor.includes("oklch")) node.style.backgroundColor = "#fff";
      });
    };

    cleanUnsupportedColors(input);

    html2canvas(input, {
      scale: 1.5,
      useCORS: true,
      scrollY: -window.scrollY,
      backgroundColor: "#ffffff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.8);
      const pdf = new jsPDF("p", "pt", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const newImgWidth = imgWidth * ratio;
      const newImgHeight = imgHeight * ratio;

      pdf.addImage(imgData, "JPEG", 0, 0, newImgWidth, newImgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-[#F4EBD0] text-[#0F4C5C] flex flex-col justify-center items-center px-4 py-10">
      {/* Resume Form */}
      <div className="w-full max-w-4xl">
        <ResumeGenerator onChange={handleChange} onGenerate={handleGenerate} />
      </div>

      {/* Success Message (after generate) */}
      {resumeData && Object.keys(resumeData).length > 0 && (
        <div className="mt-10 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Your resume has been generated successfully!
          </p>
          <button
            onClick={handleDownload}
            className="bg-[#0F4C5C] text-white py-2 px-6 rounded hover:bg-[#0d3a44] transition"
          >
            Download PDF
          </button>
        </div>
      )}

      {/* Hidden Preview for PDF generation */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        {resumeData && <ResumePreview data={resumeData} resumeRef={previewRef} />}
      </div>
    </div>
  );
};

export default GenerateResume;
