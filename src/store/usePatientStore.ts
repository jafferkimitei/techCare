
import { create } from "zustand";
import { Patient, patients } from "@/data/patients";

interface PatientStore {
  selectedPatient: Patient | null;
  setSelectedPatient: (patient: Patient) => void;
  clearSelectedPatient: () => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
  selectedPatient: patients[0], 
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  clearSelectedPatient: () => set({ selectedPatient: null }),
}));
