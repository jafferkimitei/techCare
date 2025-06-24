'use client';

import Image from 'next/image';
import clsx from 'clsx';

interface Props {
  label: string;
  value: string;
  icon: string;
  status: 'normal' | 'lower' | 'higher';
  statusIcon?: string;
  bgColor: string;
}

const statusLabelMap = {
  normal: 'Normal',
  lower: 'Lower than Average',
  higher: 'Higher than Average',
};

const VitalCard = ({ label, value, icon, status, statusIcon, bgColor }: Props) => {
  return (
    <div
      className={clsx(
        'rounded-xl shadow-sm flex flex-col justify-between relative p-3 sm:p-4 min-w-0 h-full w-full',
        bgColor
      )}
    >
      <div className="absolute top-3 left-3 w-16 h-16 sm:w-24 sm:h-24">
        <Image
          src={icon}
          alt={label}
          width={96}
          height={96}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="mt-20 sm:mt-28">
        <p className="text-[#072635] font-medium text-xs sm:text-sm capitalize">{label}</p>
        <p className="text-[#072635] font-extrabold text-lg sm:text-2xl leading-tight">{value}</p>
        <div className="flex items-center gap-1 mt-1 sm:mt-2">
          {(status === 'lower' || status === 'higher') && statusIcon && (
            <Image src={statusIcon} alt="status" width={12} height={12} className="sm:w-4 sm:h-4" />
          )}
          <p className="text-[#072635] text-xs sm:text-sm">{statusLabelMap[status]}</p>
        </div>
      </div>
    </div>
  );
};

export default VitalCard;