'use client';

interface DiagnosisItem {
  name: string;
  description: string;
  status: string;
}

interface DiagnosisTableProps {
  data: DiagnosisItem[];
}

const DiagnosisTable = ({ data }: DiagnosisTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 rounded-full">
          <tr>
            <th className="px-4 py-2 font-medium">Problem</th>
            <th className="px-4 py-2 font-medium">Description</th>
            <th className="px-4 py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-200 rounded-full">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.description}</td>
              <td className="px-4 py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisTable;