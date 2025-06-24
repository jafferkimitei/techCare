import { create } from 'zustand';
import { fetchPatients as fetchPatientsAPI } from '@/lib/fetchPatients';

type DiagnosisHistory = {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate: { value: number; levels: string };
  respiratory_rate: { value: number; levels: string };
  temperature: { value: number; levels: string };
};

type DiagnosticItem = {
  name: string;
  description: string;
  status: string;
};

type Patient = {
  name: string;
  age: number;
  gender: string;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
};

type PatientStore = {
  patients: Patient[];
  selectedPatient: Patient | null;
  loading: boolean;
  fetchPatients: () => Promise<void>;
  selectPatient: (patient: Patient) => void;
};

export const usePatientStore = create<PatientStore>((set) => ({
  patients: [],
  selectedPatient: null,
  loading: false,
  fetchPatients: async () => {
    set({ loading: true });
    try {
      const data = await fetchPatientsAPI();
      const patients = Array.isArray(data) ? data : [data];
      set({
        patients,
        selectedPatient: patients.length > 0 ? patients[0] : null,
      });
    } catch (error) {
      console.error('🛑 Failed to fetch patients:', error);
    } finally {
      set({ loading: false });
    }
  },
  selectPatient: (patient) => set({ selectedPatient: patient }),
}));