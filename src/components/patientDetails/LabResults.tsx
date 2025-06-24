'use client';

import { usePatientStore } from '@/store/usePatientStore';
import Image from 'next/image';

const LabResults = () => {
  const { selectedPatient } = usePatientStore();

  if (!selectedPatient) {
    return (
      <section className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="text-lg font-semibold text-[#072635]">Lab Results</h3>
        <p className="text-sm text-red-500 mt-2">Patient not found.</p>
      </section>
    );
  }

  const labResults = selectedPatient.lab_results;
  console.log('Selected Patient Lab Results:', selectedPatient.lab_results);
  return (
    <section className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-4 h-full">
      <h3 className="text-lg font-semibold text-[#072635]">Lab Results</h3>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[260px] pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {!Array.isArray(labResults) || labResults.length === 0 ? (
          <p className="text-sm text-gray-500">No lab results available.</p>
        ) : (
          labResults.map((result) => (
            <div
              key={result}
              className="flex items-center justify-between p-3 rounded-md hover:bg-[#F5F9F8] transition"
            >
              <div className="flex flex-col text-sm">
                <span className="text-[#072635] font-medium">{result}</span>
                
              </div>

              <a
                href={`/lab-results/${encodeURIComponent(result)}`}
                download
                className="ml-4"
                title={`Download ${result}`}
              >
                <Image
                  src="/icons/downloadIcon.png"
                  alt="Download icon"
                  width={20}
                  height={20}
                  className="object-contain hover:scale-110 transition"
                />
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default LabResults;