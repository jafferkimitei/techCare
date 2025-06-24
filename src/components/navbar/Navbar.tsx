"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

const navItems = [
  { label: "Overview", href: "/overview", icon: "/icons/home_FILL0_wght300_GRAD0_opsz24.svg" },
  { label: "Patients", href: "/patients", icon: "/icons/group_FILL0_wght300_GRAD0_opsz24.svg" },
  { label: "Schedule", href: "/schedule", icon: "/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" },
  { label: "Message", href: "/messages", icon: "/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" },
  { label: "Transactions", href: "/transactions", icon: "/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      className="
        mx-auto mt-[18px] ml-[18px] px-6 py-4
        w-[1564px] h-[72px]
        bg-white shadow-sm
        flex items-center justify-between
        rounded-[70px]
        relative z-10
      "
    >
      {/* Logo Section */}
      <div className="flex items-center justify-start flex-1 min-w-0">
        <div className="w-[211px] h-[48px] relative">
          <Image
            src="/TestLogo.svg"
            alt="MediTrack Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex justify-center flex-1 min-w-0 gap-2 text-sm font-medium text-[#072635]">
        {navItems.map(({ label, href, icon }) => {
          const isActive = pathname === href;
          return (
            <a
              key={label}
              href={href}
              className={clsx(
                // Base styles - ensure proper display and positioning
                "inline-flex items-center gap-2 px-4 py-2.5 text-[14px] font-bold font-[Manrope] transition-all duration-200 whitespace-nowrap",
                // Active state with full coverage
                isActive
                  ? "bg-[#01F0D0] text-[#072635] rounded-[41px] shadow-sm"
                  : "text-[#072635] hover:text-blue-600 hover:bg-gray-50 rounded-[41px]"
              )}
            >
              <Image
                src={icon}
                alt={`${label} icon`}
                width={16}
                height={17}
                className="object-contain flex-shrink-0"
              />
              <span className="leading-none">{label}</span>
            </a>
          );
        })}
      </nav>

      {/* User + Actions */}
      <div className="flex items-center justify-end flex-1 min-w-0 gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <Image
            src="/patients/dr_jose.png"
            alt="dr. jose"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <div className="hidden md:block text-sm">
            <p className="font-medium">Dr. Jose Simmons</p>
            <p className="text-xs text-gray-500">General Practictioner</p>
          </div>
        </div>

        {/* Separator */}
        <div className="h-10 border-l border-gray-200" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Settings */}
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition"
            title="Settings"
            aria-label="Settings"
          >
            <Image
              src="/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="Settings icon"
              width={19}
              height={20}
              className="object-contain"
            />
          </button>

          {/* More Options */}
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition"
            title="More options"
            aria-haspopup="true"
          >
            <Image
              src="/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="More options icon"
              width={4}
              height={18}
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;