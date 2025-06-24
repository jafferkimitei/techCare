'use client';

import { useEffect } from 'react';
import PatientsColumn from '@/components/patients/PatientsColumn';
import DiagnosisColumn from '@/components/diagnosis/DiagnosisColumn';
import PatientInfoColumn from '@/components/patientDetails/PatientSidebar';
import { usePatientStore } from '@/store/usePatientStore';

export default function PatientsPage() {
  const { patients, fetchPatients, loading } = usePatientStore();

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  if (loading) {
    return <div className="p-2 sm:p-4 text-gray-500">Loading patients...</div>;
  }

  return (
    <div className="min-h-screen text-gray-900 p-2 sm:p-4">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr]">
        <div className=" rounded-xl">
          <PatientsColumn patients={patients} />
        </div>
        <div className=" rounded-xl">
          <DiagnosisColumn />
        </div>
        <div className=" rounded-xl md:hidden lg:block">
          <PatientInfoColumn />
        </div>
      </div>
    </div>
  );
}