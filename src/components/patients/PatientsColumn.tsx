'use client';

import Image from 'next/image';
import { usePatientStore } from '@/store/usePatientStore';
import clsx from 'clsx';

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

interface PatientsColumnProps {
  patients: Patient[];
}

const PatientsColumn = ({ patients }: PatientsColumnProps) => {
  const { selectPatient, selectedPatient } = usePatientStore();

  if (!patients.length) {
    return <div className="p-3 sm:p-4 text-gray-500">No patients found.</div>;
  }

  return (
    <section className="bg-white rounded-xl shadow-sm p-3 sm:p-4 h-[calc(100vh+50vh)] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#072635] font-manrope">
          Patients
        </h2>
        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Image
            src="/icons/search_FILL0_wght300_GRAD0_opsz24.svg"
            alt="Search"
            width={16}
            height={16}
            className="object-contain"
          />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto pr-1 space-y-2 sm:space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={clsx(
              'cursor-pointer p-2 sm:p-3 rounded-lg flex items-center justify-between transition-colors touch-none',
              selectedPatient?.name === patient.name ? 'bg-[#D8FCF7]' : 'hover:bg-blue-50'
            )}
            onClick={() => selectPatient(patient)}
          >
            <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0">
                <Image
                  src={patient.profile_picture}
                  alt={patient.name}
                  fill
                  quality={100}
                  className="rounded-full object-cover"
                  sizes="(max-width: 640px) 48px, 64px"
                />
              </div>
              <div className="flex flex-col truncate">
                <p className="font-medium text-sm sm:text-base text-[#072635] truncate">{patient.name}</p>
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <button
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="More options"
            >
              <Image
                src="/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                alt="More Options"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientsColumn;