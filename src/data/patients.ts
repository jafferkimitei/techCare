
export interface Diagnosis {
    problem: string;
    description: string;
    status: string;
  }
  
  export interface LabResult {
    file: string;
    size: string;
  }
  
  export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: "Male" | "Female";
    photo: string;
    phone: string;
    email: string;
    dob: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
    insurance: {
      provider: string;
      planId: string;
    };
    vitals: {
      respiratoryRate: string;
      temperature: string;
      heartRate: string;
    };
    diagnosis: Diagnosis[];
    labResults: LabResult[];
    bloodPressureHistory: BloodPressureEntry[];
  }

  
  export const patients: Patient[] = [
    {
      id: "1",
      name: "Emily Williams",
      age: 18,
      gender: "Female",
      photo: "/patients/emily_williams.png",
      dob: "2006-03-15",
      contact: {
        phone: "+1 555-234-5678",
        email: "emily.williams@email.com"
      },
      emergencyContact: {
        name: "Sarah Williams",
        relationship: "Mother",
        phone: "+1 555-888-1234",
      },
      insurance: {
        provider: "Aetna Health",
        planId: "AE-10239",
      },
      vitals: {
        respiratoryRate: "17",
        temperature: "36.8",
        heartRate: "72",
      },
      diagnosis: [
        {
          problem: "Seasonal Allergies",
          description: "Mild allergic rhinitis",
          status: "Under Control",
        },
        {
          problem: "Mild Anemia",
          description: "Low hemoglobin level",
          status: "Stable",
        },
      ],
      labResults: [
        {
          file: "BloodTest_March2024.pdf",
          size: "480KB",
        },
        {
          file: "AllergyScan_2023.pdf",
          size: "650KB",
        },
      ],
      bloodPressureHistory: [
        { year: 2023, month: 1, systolic: 128, diastolic: 84 },
        { year: 2023, month: 2, systolic: 125, diastolic: 82 },
        { year: 2023, month: 3, systolic: 132, diastolic: 86 },
        { year: 2023, month: 4, systolic: 130, diastolic: 80 },
        { year: 2023, month: 5, systolic: 129, diastolic: 79 },
        { year: 2023, month: 6, systolic: 127, diastolic: 81 },
        { year: 2023, month: 7, systolic: 133, diastolic: 85 },
        { year: 2023, month: 8, systolic: 135, diastolic: 88 },
        { year: 2023, month: 9, systolic: 138, diastolic: 87 },
        { year: 2023, month: 10, systolic: 136, diastolic: 86 },
        { year: 2023, month: 11, systolic: 134, diastolic: 85 },
        { year: 2023, month: 12, systolic: 132, diastolic: 84 },
        { year: 2024, month: 1, systolic: 130, diastolic: 83 },
        { year: 2024, month: 2, systolic: 129, diastolic: 82 },
        { year: 2024, month: 3, systolic: 128, diastolic: 81 },
        { year: 2024, month: 4, systolic: 127, diastolic: 80 },
        { year: 2024, month: 5, systolic: 126, diastolic: 79 },
        { year: 2024, month: 6, systolic: 125, diastolic: 78 },
        { year: 2024, month: 7, systolic: 124, diastolic: 77 },
        { year: 2024, month: 8, systolic: 123, diastolic: 76 },
        { year: 2024, month: 9, systolic: 122, diastolic: 75 },
        { year: 2024, month: 10, systolic: 121, diastolic: 74 },
        { year: 2024, month: 11, systolic: 120, diastolic: 73 },
        { year: 2024, month: 12, systolic: 119, diastolic: 72 },
      ],
    },
    {
      id: "2",
      name: "Ryan Johnson",
      age: 45,
      gender: "Male",
      photo: "/patients/ryan_johnson.png",
      dob: "1979-09-12",
      contact: {
        phone: "+1 555-123-9876",
        email: "ryan.j@email.com"
      },
      emergencyContact: {
        name: "Lara Johnson",
        relationship: "Wife",
        phone: "+1 555-999-4321",
      },
      insurance: {
        provider: "United HealthCare",
        planId: "UH-44567",
      },
      vitals: {
        respiratoryRate: "19 bpm",
        temperature: "37.0°C",
        heartRate: "80 bpm",
      },
      diagnosis: [
        {
          problem: "Hypertension",
          description: "High blood pressure requiring regular monitoring",
          status: "Ongoing",
        },
        {
          problem: "Type 2 Diabetes",
          description: "Insulin managed diabetes",
          status: "Stable",
        },
      ],
      labResults: [
        {
          file: "BloodTest_2024.pdf",
          size: "450KB",
        },
        {
          file: "XRay_Chest_2023.pdf",
          size: "1.2MB",
        },
      ],
      bloodPressureHistory: [
        { year: 2023, month: 1, systolic: 128, diastolic: 84 },
        { year: 2023, month: 2, systolic: 125, diastolic: 82 },
        { year: 2023, month: 3, systolic: 132, diastolic: 86 },
        { year: 2023, month: 4, systolic: 130, diastolic: 80 },
        { year: 2023, month: 5, systolic: 129, diastolic: 79 },
        { year: 2023, month: 6, systolic: 127, diastolic: 81 },
        { year: 2023, month: 7, systolic: 133, diastolic: 85 },
        { year: 2023, month: 8, systolic: 135, diastolic: 88 },
        { year: 2023, month: 9, systolic: 138, diastolic: 87 },
        { year: 2023, month: 10, systolic: 136, diastolic: 86 },
        { year: 2023, month: 11, systolic: 134, diastolic: 85 },
        { year: 2023, month: 12, systolic: 132, diastolic: 84 },
        { year: 2024, month: 1, systolic: 130, diastolic: 83 },
        { year: 2024, month: 2, systolic: 129, diastolic: 82 },
        { year: 2024, month: 3, systolic: 128, diastolic: 81 },
        { year: 2024, month: 4, systolic: 127, diastolic: 80 },
        { year: 2024, month: 5, systolic: 126, diastolic: 79 },
        { year: 2024, month: 6, systolic: 125, diastolic: 78 },
        { year: 2024, month: 7, systolic: 124, diastolic: 77 },
        { year: 2024, month: 8, systolic: 123, diastolic: 76 },
        { year: 2024, month: 9, systolic: 122, diastolic: 75 },
        { year: 2024, month: 10, systolic: 121, diastolic: 74 },
        { year: 2024, month: 11, systolic: 120, diastolic: 73 },
        { year: 2024, month: 12, systolic: 119, diastolic: 72 },
      ],
    },
   
  ];
  