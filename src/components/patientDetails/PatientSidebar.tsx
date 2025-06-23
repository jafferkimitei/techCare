import PatientInfoColumn from './PatientInfoColumn';
import LabResults from './LabResults';

const PatientSidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      <PatientInfoColumn />
      <LabResults />
    </div>
  );
};

export default PatientSidebar;
