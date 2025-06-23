'use client';

import { usePatientStore } from '@/store/usePatientStore';
import Image from 'next/image';

// ────────────────────────────────────────────
// Reusable info row
// ────────────────────────────────────────────
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

  // ── Normalised / formatted fields ───────────────────────────────
  const contact =
    typeof selectedPatient.contact === 'object'
      ? selectedPatient.contact.phone || 'N/A'
      : selectedPatient.contact;

  const emergency =
    typeof selectedPatient.emergencyContact === 'object'
      ? selectedPatient.emergencyContact.phone
      : selectedPatient.emergencyContact;

  const insurance =
    typeof selectedPatient.insurance === 'object'
      ? selectedPatient.insurance.provider
      : selectedPatient.insurance;

  const genderIcon =
    selectedPatient.gender === 'Male'
      ? '/icons/MaleIcon.png'
      : selectedPatient.gender === 'Female'
      ? '/icons/FemaleIcon.png'
      : '/icons/gender.svg';

  // ── UI ──────────────────────────────────────────────────────────
  return (
    <aside className="bg-white rounded-xl shadow-sm p-4 h-full flex flex-col gap-6 overflow-y-auto">
      {/* Avatar + name centred */}
      <div className="flex flex-col items-center text-center">
        <Image
          src={selectedPatient.photo}
          alt={selectedPatient.name}
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <h2 className="text-lg font-semibold">{selectedPatient.name}</h2>
        <p className="text-sm text-gray-500">
          ID: #P-{selectedPatient.id.padStart(3, '0')}
        </p>
      </div>

      {/* Details left-aligned */}
      <div className="text-sm space-y-4">
        <InfoItem
          iconSrc="/icons/BirthIcon.png"
          label="Date of Birth"
          value={selectedPatient.dob}
        />
        <InfoItem iconSrc={genderIcon} label="Gender" value={selectedPatient.gender} />
        <InfoItem iconSrc="/icons/PhoneIcon.png" label="Contact Info" value={contact} />
        <InfoItem
          iconSrc="/icons/PhoneIcon.png"
          label="Emergency Contact"
          value={emergency}
        />
        <InfoItem
          iconSrc="/icons/InsuranceIcon.png"
          label="Insurance Provider"
          value={insurance}
        />
      </div>

      {/* CTA button centred */}
      <div className="flex justify-center pt-2">
        <button
          className="
            w-[220px] h-[41px]
            bg-[#01F0D0] rounded-[41px]
            text-[#072635] text-[14px] leading-[19px] font-bold
            hover:brightness-110 transition"
        >
          Show All Information
        </button>
      </div>
    </aside>
  );
};

export default PatientInfoColumn;
