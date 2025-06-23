
export interface VitalData {
    label: string;
    unit: string;
    icon: string;
    bgColor: string;
    value: number;
    normalRange: [number, number];
  }
  
  export const vitalsConfig = (vitals: {
    respiratoryRate: number;
    temperature: number;
    heartRate: number;
  }) => [
    {
      label: "Respiratory Rate",
      value: vitals.respiratoryRate,
      unit: "bpm",
      icon: "/icons/respiratoryrate.png",
      bgColor: "bg-[#E0F3FA]",
      normalRange: [12, 20],
    },
    {
      label: "Temperature",
      value: vitals.temperature,
      unit: "°C",
      icon: "/icons/temperature.png",
      bgColor: "bg-[#FFE6E9]",
      normalRange: [36.1, 37.2],
    },
    {
      label: "Heart Rate",
      value: vitals.heartRate,
      unit: "bpm",
      icon: "/icons/heartBPM.png",
      bgColor: "bg-[#FFE6F1]",
      normalRange: [60, 100],
    },
  ];
  