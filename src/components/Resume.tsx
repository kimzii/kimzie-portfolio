import { useState } from "react";
import { FileText, X, Download } from "lucide-react"; // Lucide icons

export const Resume: React.FC = () => {
  const [showResume, setShowResume] = useState<boolean>(false);

  return (
    <div className="transition-all">
      <div
        className={`my-4 bg-primary shadow-md overflow-hidden transition-all duration-500 ease-in-out
        ${showResume ? "h-auto p-6" : "h-16 p-4"}`}
      >
        {/* Icon Button */}
        <div className="flex justify-end items-center">
          <button>
            <Download
              size={20}
              className="text-white hover:text-blue-600 transition"
            />
            <a
              href="/KimzieTorres-CV.pdf"
              download="KimzieTorres-CV.pdf"
              className="text-white hover:text-blue-600 transition"
              aria-label="Download Resume"
            ></a>
          </button>
          <button
            onClick={() => setShowResume(!showResume)}
            className="text-white hover:text-blue-600 transition"
            aria-label="Toggle Resume"
          >
            {showResume ? <X size={20} /> : <FileText size={20} />}
          </button>
        </div>

        {/* Resume Content */}
        {showResume && (
          <div className="my-4">
            <img
              src="/KimzieTorres-CV.png"
              alt="Kimzie's Resume"
              className="w-full max-w-3xl border rounded shadow"
            />
          </div>
        )}
      </div>
    </div>
  );
};
import "../App.css";
