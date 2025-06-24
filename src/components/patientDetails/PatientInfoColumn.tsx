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
  <div className="flex items-start gap-3">
    <Image
      src={iconSrc}
      alt={`${label} icon`}
      width={24}
      height={24}
      className="mt-1 w-6 h-6 object-contain"
    />
    <div className="flex flex-col text-sm">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-[#072635] font-semibold whitespace-pre-line">
        {value}
      </span>
    </div>
  </div>
);

const PatientInfoColumn = () => {
  const { selectedPatient } = usePatientStore();

  if (!selectedPatient) {
    return (
      <aside className="bg-white rounded-xl shadow-sm p-4 h-full flex items-center justify-center">
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

  return (
    <aside className="bg-white rounded-xl shadow-sm p-4 h-full flex flex-col gap-6 overflow-y-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src={profile_picture}
          alt={name}
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <h2 className="text-lg font-bold text-[#072635]">{name}</h2>
        <p className="text-sm text-gray-500">{age} years</p>
      </div>

      <div className="flex flex-col gap-4">
        <InfoItem iconSrc={genderIcon} label="Gender" value={gender} />
        <InfoItem iconSrc="/icons/BirthIcon.png" label="DOB" value={date_of_birth} />
        <InfoItem iconSrc="/icons/PhoneIcon.png" label="Phone Number" value={phone_number} />
        <InfoItem iconSrc="/icons/PhoneIcon.png" label="Emergency Contact" value={emergency_contact} />
        <InfoItem iconSrc="/icons/InsuranceIcon.png" label="Insurance Type" value={insurance_type} />
      </div>
    </aside>
  );
};

export default PatientInfoColumn;
