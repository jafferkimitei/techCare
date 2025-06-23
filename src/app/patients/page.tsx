import PatientsColumn from "@/components/patients/PatientsColumn";
import DiagnosisColumn from "@/components/diagnosis/DiagnosisColumn";
import PatientInfoColumn from "@/components/patientDetails/PatientSidebar";

export default function PatientsPage() {
  return (
    <div className="min-h-screen text-gray-900 p-4">
      {/* Layout: 1fr 2fr 1fr to mimic the previous pixel-based spacing */}
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-x-6 h-full">
        {/* Column 1: Patients */}
        <div className="h-full bg-white rounded-2xl shadow-sm">
          <PatientsColumn />
        </div>

        {/* Column 2: Diagnosis */}
        <div className="h-full bg-white rounded-2xl shadow-sm">
          <DiagnosisColumn />
        </div>

        {/* Column 3: Patient Info */}
        <div className="h-full bg-white rounded-2xl shadow-sm">
          <PatientInfoColumn />
        </div>
      </div>
    </div>
  );
}
