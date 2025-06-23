import { usePatientStore } from "@/store/usePatientStore";
import { patients } from "@/data/patients"; 
import Image from "next/image";

const PatientList = () => {
  const { setSelectedPatient } = usePatientStore();

  return (
    <div className="space-y-4">
      {patients.map((patient) => (
        <div
          key={patient.id}
          className="cursor-pointer bg-white p-3 hover:bg-blue-50 transition"
          onClick={() => setSelectedPatient(patient)}>
          <Image
            src={patient.photo}
            alt={patient.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full"
          />
          <p className="font-medium mt-1">{patient.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
