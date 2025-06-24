'use client';
import { useEffect, useState } from 'react';
import PatientsColumn from '@/components/patients/PatientsColumn';
import DiagnosisColumn from '@/components/diagnosis/DiagnosisColumn';
import PatientInfoColumn from '@/components/patientDetails/PatientSidebar';
import { usePatientStore } from '@/store/usePatientStore';

export default function PatientsPage() {
  const { patients, fetchPatients, loading, selectedPatient } = usePatientStore();
  const [activeTab, setActiveTab] = useState<'patients' | 'diagnosis' | 'info'>('patients');

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  useEffect(() => {
    if (selectedPatient && window.innerWidth < 1024) {
      setActiveTab('diagnosis');
    }
  }, [selectedPatient]);

  if (loading) {
    return <div className="p-4 text-gray-500">Loading patients...</div>;
  }

  return (
    <div className="min-h-screen text-gray-900 p-2 sm:p-4">
      <div className="lg:hidden mb-4">
        <div className="flex bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('patients')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'patients'
                ? 'bg-[#01F0D0] text-[#072635]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Patients
          </button>
          <button
            onClick={() => setActiveTab('diagnosis')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'diagnosis'
                ? 'bg-[#01F0D0] text-[#072635]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            disabled={!selectedPatient}
          >
            Diagnosis
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'info'
                ? 'bg-[#01F0D0] text-[#072635]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            disabled={!selectedPatient}
          >
            Info
          </button>
        </div>
      </div>

      
      <div className="hidden lg:grid lg:grid-cols-[1fr_2fr_1fr] gap-x-6 h-full">
        <div className="h-full rounded-2xl">
          <PatientsColumn patients={patients} />
        </div>
        <div className="h-full rounded-2xl">
          <DiagnosisColumn />
        </div>
        <div className="h-full rounded-2xl">
          <PatientInfoColumn />
        </div>
      </div>

      
      <div className="lg:hidden">
        {activeTab === 'patients' && (
          <div className="h-[calc(100vh-200px)]">
            <PatientsColumn patients={patients} />
          </div>
        )}
        {activeTab === 'diagnosis' && (
          <div className="h-[calc(100vh-200px)] overflow-y-auto">
            <DiagnosisColumn />
          </div>
        )}
        {activeTab === 'info' && (
          <div className="h-[calc(100vh-200px)]">
            <PatientInfoColumn />
          </div>
        )}
      </div>
    </div>
  );
}
