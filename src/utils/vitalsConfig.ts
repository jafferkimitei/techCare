export const vitalsConfig = (vitals: {
  respiratoryRate?: number;
  temperature?: number;
  heartRate?: number;
}) => [
  {
    label: 'Respiratory Rate',
    value: vitals.respiratoryRate || 0,
    unit: 'bpm',
    icon: '/icons/respiratory_rate.png',
    bgColor: 'bg-[#E0F3FA]',
    normalRange: { min: 12, max: 20 },
  },
  {
    label: 'Temperature',
    value: vitals.temperature || 0,
    unit: '°F',
    icon: '/icons/temperature.png',
    bgColor: 'bg-[#FFE6E9]',
    normalRange: { min: 97, max: 99 },
  },
  {
    label: 'Heart Rate',
    value: vitals.heartRate || 0,
    unit: 'bpm',
    icon: '/icons/heart_rate.png',
    bgColor: 'bg-[#FFE6F1]',
    normalRange: { min: 60, max: 100 },
  },
];