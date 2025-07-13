import { useState } from 'react';

export const Resume: React.FC = () => {
  const [showResume, setShowResume] = useState<boolean>(false);

  return (
    <div>

      <button
        onClick={() => setShowResume(!showResume)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {showResume ? 'Hide Resume' : 'Show Resume'}
      </button>

      {showResume && (
        <img
          src="/KimzieTorres-CV.png"
          alt="Kimzie's Resume"
          className="mt-4 w-full max-w-3xl border rounded shadow"
        />
      )}
    </div>
  );
};
