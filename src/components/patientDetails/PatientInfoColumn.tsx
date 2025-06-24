'use client';

import { usePatientStore } from '@/store/usePatientStore';
import Image from 'next/image';

const InfoItem = ({
  iconSrc,
  label,
  value,
}: {
  iconSrc: string;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-2 sm:gap-3">
    <Image
      src={iconSrc}
      alt={`${label} icon`}
      width={20}
      height={20}
      className="mt-1 w-5 h-5 sm:w-6 sm:h-6 object-contain"
    />
    <div className="flex flex-col text-xs sm:text-sm">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-[#072635] font-semibold whitespace-pre-line">{value}</span>
    </div>
  </div>
);

const PatientInfoColumn = () => {
  const { selectedPatient } = usePatientStore();

  if (!selectedPatient) {
    return (
      <aside className="bg-white rounded-xl shadow-sm p-3 sm:p-4 h-[calc(100vh-4rem)] flex items-center justify-center">
        <p className="text-gray-400 italic">Select a patient to view details</p>
      </aside>
    );
  }

  const {
    name,
    gender,
    age,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
  } = selectedPatient;

  const genderIcon =
    gender === 'Male'
      ? '/icons/MaleIcon.png'
      : gender === 'Female'
      ? '/icons/FemaleIcon.png'
      : '/icons/gender.svg';

  const handleShowAllInfo = () => {
    console.log('Show all information clicked for:', name);
  };

  return (
    <aside className="bg-white rounded-xl shadow-sm p-3 sm:p-4 h-full flex flex-col gap-4 sm:gap-6 overflow-y-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src={profile_picture}
          alt={name}
          width={80}
          height={80}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-2"
        />
        <h2 className="text-base sm:text-lg font-bold text-[#072635]">{name}</h2>
        <p className="text-xs sm:text-sm text-gray-500">{age} years</p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <InfoItem iconSrc={genderIcon} label="Gender" value={gender} />
        <InfoItem iconSrc="/icons/BirthIcon.png" label="DOB" value={date_of_birth} />
        <InfoItem iconSrc="/icons/PhoneIcon.png" label="Phone Number" value={phone_number} />
        <InfoItem iconSrc="/icons/PhoneIcon.png" label="Emergency Contact" value={emergency_contact} />
        <InfoItem iconSrc="/icons/InsuranceIcon.png" label="Insurance Type" value={insurance_type} />
      </div>
      <div className="flex justify-center mt-3 sm:mt-4">
        <button
          className="w-[220px] h-[41px] bg-[#01F0D0] rounded-full text-[#072635] font-manrope font-bold text-[14px] leading-[19px] flex items-center justify-center hover:bg-[#00D6B8] transition-colors"
          onClick={handleShowAllInfo}
        >
          Show all information
        </button>
      </div>
    </aside>
  );
};

export default PatientInfoColumn;