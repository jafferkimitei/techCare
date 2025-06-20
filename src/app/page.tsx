// src/app/dashboard/page.tsx
import Navbar from "../components/navbar/Navbar";
import PatientsColumn from "../components/patients/PatientsColumn";
import DiagnosisColumn from "../components/diagnosis/DiagnosisColumn";
import PatientInfoColumn from "../components/patientDetails/PatientInfoColumn";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
        <div className="space-y-4">
          <PatientsColumn />
        </div>
        <div className="md:col-span-1 md:w-full space-y-4">
          <DiagnosisColumn />
        </div>
        <div className="space-y-4">
          <PatientInfoColumn />
        </div>
      </main>
    </div>
  );
}
