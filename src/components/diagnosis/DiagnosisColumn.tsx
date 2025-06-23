'use client'

import { usePatientStore } from '@/store/usePatientStore'
import VitalCard from './VitalCard'
import { vitalsConfig } from '../../utils/vitalsConfig'
import { getVitalStatus } from '../../utils/getVitalStatus'
import DiagnosisTable from './DiagnosisTable'
import BloodPressureChart from './BloodPressureChart';

const DiagnosisColumn = () => {
  const { selectedPatient } = usePatientStore()

  if (!selectedPatient) {
    return (
      <section className='bg-white rounded-xl shadow-sm flex items-center justify-center'>
        <p className='text-gray-400 italic'>
          Select a patient to see diagnosis info
        </p>
      </section>
    )
  }

  const { vitals, diagnosis } = selectedPatient
  const vitalCards = vitalsConfig(vitals)

  return (
    <>
      <section className='bg-white rounded-xl shadow-sm flex flex-col gap-4 p-4'>
        <h3 className='font-semibold text-base mb-2'>Diagnosis History</h3>
        <div className='bg-gray-50 rounded-lg p-4 h-64 flex items-center justify-center'>
  <BloodPressureChart />
</div>


        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-fr'>
          {vitalCards.map((vital) => {
            const { status, statusIcon } = getVitalStatus(
              vital.value,
              vital.normalRange
            )

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
            )
          })}
        </div>
      </section>

      {/* Diagnosis List Section */}
      <section className='bg-white rounded-xl shadow-sm flex mt-4 flex-col gap-4 p-4'>
        <div>
          <h3 className='font-semibold text-base mb-2'>Diagnosis List</h3>
          <DiagnosisTable data={diagnosis} />
        </div>
      </section>
    </>
  )
}

export default DiagnosisColumn
