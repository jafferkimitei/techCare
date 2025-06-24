
'use client';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { usePatientStore } from '@/store/usePatientStore';
import Image from 'next/image';
import { useState } from 'react';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip, Title);

const BloodPressureChart = () => {
  const { selectedPatient } = usePatientStore();
  const [filter, setFilter] = useState<'1m' | '6m' | '1y'>('6m');


  const abbreviateMonth = (monthName: string) => {
    const monthAbbreviations: { [key: string]: string } = {
      'January': 'Jan',
      'February': 'Feb',
      'March': 'Mar',
      'April': 'Apr',
      'May': 'May',
      'June': 'Jun',
      'July': 'Jul',
      'August': 'Aug',
      'September': 'Sep',
      'October': 'Oct',
      'November': 'Nov',
      'December': 'Dec'
    };
    return monthAbbreviations[monthName] || monthName;
  };

  if (!selectedPatient || !selectedPatient.diagnosis_history) {
    return (
      <p className="text-gray-400 italic text-center w-full">
        No blood pressure data available.
      </p>
    );
  }

  const getFilteredHistory = () => {
    const history = selectedPatient.diagnosis_history;
    if (filter === '1m') return history.slice(-1);
    if (filter === '6m') return history.slice(-6);
    if (filter === '1y') return history.slice(-12);
    return history;
  };

  const history = getFilteredHistory();
  const labels = history.map((entry) => `${abbreviateMonth(entry.month)}, ${entry.year}`);
  const systolicData = history.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = history.map((entry) => entry.blood_pressure.diastolic.value);

  const maxSystolic = Math.max(...systolicData);
  const maxDiastolic = Math.max(...diastolicData);

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#EC4899',
        backgroundColor: 'rgba(236, 72, 153, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: { 
          stepSize: 20,
          callback: function(value: never) {
            return value;
          }
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Blood Pressure</h2>
        <div className="relative text-sm text-gray-500 cursor-pointer">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as '1m' | '6m' | '1y')}
            className="bg-transparent appearance-none pr-6"
          >
            <option value="1m">Last 1 month</option>
            <option value="6m">Last 6 months</option>
            <option value="1y">Last 1 year</option>
          </select>
          <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src="/icons/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
              alt="Expand More Icon"
              width={14}
              height={14}
              className="text-gray-300"
            />
          </span>
        </div>
      </div>

      <div className="flex w-full h-full gap-4">
        <div className="flex-1 min-w-0 h-full">
          <Line data={data} options={options} />
        </div>
        <div className="w-52 flex flex-col text-sm text-gray-700 pl-4">
          <div className="border-b border-gray-200 pb-3 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-pink-400" />
              <span className="font-semibold">Systolic</span>
            </div>
            <div className="ml-5 text-gray-600">
              <div className="text-xl font-bold text-pink-500">{maxSystolic}</div>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/ArrowUp.svg"
                  alt="Up Arrow"
                  width={14}
                  height={14}
                  className="text-pink-400"
                />
                <span className="text-xs text-pink-400">Higher than average</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="font-semibold">Diastolic</span>
            </div>
            <div className="ml-5 text-gray-600">
              <div className="text-xl font-bold text-blue-500">{maxDiastolic}</div>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/ArrowDown.svg"
                  alt="Down Arrow"
                  width={14}
                  height={14}
                  className="text-blue-400"
                />
                <span className="text-xs text-blue-400">Lower than average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;