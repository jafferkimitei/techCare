'use client';
import { usePatientStore } from '@/store/usePatientStore';
import VitalCard from './VitalCard';
import { vitalsConfig } from '../../utils/vitalsConfig';
import { getVitalStatus } from '../../utils/getVitalStatus';
import DiagnosisTable from './DiagnosisTable';
import BloodPressureChart from './BloodPressureChart';

const DiagnosisColumn = () => {
  const { selectedPatient } = usePatientStore();

  if (!selectedPatient) {
    return (
      <section className="bg-[#f0f0f0] rounded-xl shadow-sm flex items-center justify-center min-h-[400px] lg:min-h-screen">
        <p className="text-gray-400 italic text-center px-4">
          Select a patient to see diagnosis info
        </p>
      </section>
    );
  }

  const { diagnosis_history, diagnostic_list } = selectedPatient;
  const latestVitals = diagnosis_history?.[0] ?? {};

  const vitals = {
    respiratoryRate: latestVitals?.respiratory_rate?.value,
    temperature: latestVitals?.temperature?.value,
    heartRate: latestVitals?.heart_rate?.value,
  };

  const vitalCards = vitalsConfig(vitals);

  return (
    <div className="space-y-4 sm:space-y-6">
      <section className="bg-white rounded-xl shadow-sm p-3 sm:p-6">
        <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
          Diagnosis History
        </h3>
        
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-6 h-60 sm:h-72 mb-4 sm:mb-6">
          <BloodPressureChart />
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {vitalCards.map((vital) => {
            const { status, statusIcon } = getVitalStatus(vital.value, vital.normalRange);
            return (
              <VitalCard
                key={vital.label}
                label={vital.label}
                value={`${vital.value} ${vital.unit}`}
                icon={vital.icon}
                status={status}
                statusIcon={statusIcon}
                bgColor={vital.bgColor}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-3 sm:p-6">
        <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-6">
          Diagnosis List
        </h3>
        <DiagnosisTable data={diagnostic_list} />
      </section>
    </div>
  );
};

export default DiagnosisColumn;
