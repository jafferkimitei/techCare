'use client'

import Image from "next/image"
import clsx from "clsx"

interface Props {
  label: string
  value: string
  icon: string
  status: "normal" | "lower" | "higher"
  statusIcon?: string
  bgColor: string
}

const statusLabelMap = {
  normal: "Normal",
  lower: "Lower than Average",
  higher: "Higher than Average",
}

const VitalCard = ({ label, value, icon, status, statusIcon, bgColor }: Props) => {
  return (
    <div
      className={clsx(
        "rounded-[12px] shadow-sm flex flex-col justify-between relative p-4 sm:p-6 min-w-0 h-full w-full",
        bgColor
      )}
    >
      {/* Icon Top Left */}
      <div className="absolute top-4 left-4 w-[96px] h-[96px]">
        <Image
          src={icon}
          alt={label}
          width={96}
          height={96}
          className="object-contain w-[96px] h-[96px]"
        />
      </div>

      {/* Content */}
      <div className="mt-28"> {/* increased margin to accommodate 96px icon */}
        <p className="text-[#072635] font-medium text-sm sm:text-base capitalize">
          {label}
        </p>
        <p className="text-[#072635] font-extrabold text-xl sm:text-[30px] leading-tight">
          {value}
        </p>

        <div className="flex items-center gap-1 mt-1 sm:mt-2">
          {(status === "lower" || status === "higher") && statusIcon && (
            <Image src={statusIcon} alt="status" width={16} height={16} />
          )}
          <p className="text-[#072635] text-sm">
            {statusLabelMap[status]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VitalCard
