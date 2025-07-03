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
import { ChartOptions } from 'chart.js';

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
        borderColor: '#C26EB4',
        backgroundColor: 'rgba(236, 72, 153, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#7E6CAB',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
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
          callback: function (value: number | string) {
            return value;
          },
        },
      },
      x: {
        ticks: {
          maxTicksLimit: window.innerWidth < 640 ? 3 : 6,
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Blood Pressure</h2>
        <div className="relative text-xs sm:text-sm text-gray-500 cursor-pointer">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as '1m' | '6m' | '1y')}
            className="bg-transparent appearance-none pr-6 text-xs sm:text-sm"
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

      <div className="flex flex-col lg:flex-row w-full h-full gap-4">
        <div className="flex-1 min-w-0 h-full min-h-[200px]">
          <Line data={data} options={options} />
        </div>
        
       
        <div className="w-full lg:w-52 flex flex-row lg:flex-col gap-4 lg:gap-0 text-xs sm:text-sm text-gray-700 lg:pl-4">
          <div className="flex-1 lg:flex-none border-b border-gray-200 pb-2 lg:pb-3 mb-2 lg:mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#C26EB4]" />
              <span className="font-semibold">Systolic</span>
            </div>
            <div className="ml-4 lg:ml-5 text-gray-600">
              <div className="text-lg sm:text-xl font-bold text-[#072635]">{maxSystolic}</div>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/ArrowUp.svg"
                  alt="Up Arrow"
                  width={12}
                  height={12}
                  className="sm:w-[14px] sm:h-[14px] text-[#072635]"
                />
                <span className="text-xs text-[#072635]">Higher than average</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 lg:flex-none">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#7E6CAB]" />
              <span className="font-semibold">Diastolic</span>
            </div>
            <div className="ml-4 lg:ml-5 text-gray-600">
              <div className="text-lg sm:text-xl font-bold text-[#072635]">{maxDiastolic}</div>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/ArrowDown.svg"
                  alt="Down Arrow"
                  width={12}
                  height={12}
                  className="sm:w-[14px] sm:h-[14px] text-[#072635]"
                />
                <span className="text-xs font-family-Manrope text-[#072635]">Lower than average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;