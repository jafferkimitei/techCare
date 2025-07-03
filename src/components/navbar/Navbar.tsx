'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const navItems = [
  { label: 'Overview', href: '/overview', icon: '/icons/home_FILL0_wght300_GRAD0_opsz24.svg' },
  { label: 'Patients', href: '/patients', icon: '/icons/group_FILL0_wght300_GRAD0_opsz24.svg' },
  { label: 'Schedule', href: '/schedule', icon: '/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg' },
  { label: 'Message', href: '/messages', icon: '/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg' },
  { label: 'Transactions', href: '/transactions', icon: '/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg' },
];
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
const Navbar = () => {
  const pathname = usePathname();
  const hasMounted = useHasMounted();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="mx-auto mt-2 sm:mt-[18px] ml-2 sm:ml-[18px] px-3 sm:px-6 py-3 sm:py-4 w-full max-w-[1564px] h-auto sm:h-[72px] bg-white shadow-sm flex items-center justify-between rounded-[20px] sm:rounded-[70px] relative z-10">
        <div className="flex items-center justify-start flex-1 min-w-0">
          <div className="w-[120px] sm:w-[180px] lg:w-[211px] h-[32px] sm:h-[40px] lg:h-[48px] relative">
            <Image
              src="/TestLogo.svg"
              alt="MediTrack Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        <nav className="hidden lg:flex justify-center flex-1 min-w-0 gap-2 text-sm font-medium text-[#072635]">
          {navItems.map(({ label, href, icon }) => {
            const isActive = pathname === href;
            return (
              <a
                key={label}
                href={href}
                className={clsx(
                  'inline-flex items-center gap-2 px-3 xl:px-4 py-2.5 text-[12px] xl:text-[14px] font-bold font-[Manrope] transition-all duration-200 whitespace-nowrap',
                  isActive
                    ? 'bg-[#01F0D0] text-[#072635] rounded-[41px] shadow-sm'
                    : 'text-[#072635] hover:text-blue-600 hover:bg-gray-50 rounded-[41px]'
                )}
              >
                <Image
                  src={icon}
                  alt={`${label} icon`}
                  width={14}
                  height={15}
                  className="object-contain flex-shrink-0"
                />
                <span className="leading-none">{label}</span>
              </a>
            );
          })}
        </nav>

        
        <div className="flex items-center justify-end flex-1 min-w-0 gap-2 lg:gap-4">
          
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <Image
              src="/icons/doc.jpg"
              alt="Dr. Jose"
              width={28}
              height={28}
              className="lg:w-[36px] lg:h-[36px] rounded-full object-cover"
            />
            <div className="hidden lg:block text-sm">
              <p className="font-medium text-xs lg:text-sm">Dr. Jose Simmons</p>
              <p className="text-[10px] lg:text-xs text-gray-500">General Practitioner</p>
            </div>
          </div>

          
          <div className="hidden md:block h-8 lg:h-10 border-l border-gray-200" />

       
          <div className="flex items-center gap-1 lg:gap-2">
           
            <button
              className="lg:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Image
                src={isMobileMenuOpen ? '/icons/hamburger-6-svgrepo-com.svg' : '/icons/hamburger-5-svgrepo-com.svg'}
                alt={isMobileMenuOpen ? 'Close' : 'Menu'}
                width={20}
                height={20}
                className="object-contain"
              />
            </button>

           
            <button
              className="hidden sm:block p-1.5 lg:p-2 hover:bg-gray-100 rounded-full transition"
              title="Settings"
              aria-label="Settings"
            >
              <Image
                src="/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
                alt="Settings icon"
                width={16}
                height={16}
                className="lg:w-[19px] lg:h-[20px] object-contain"
              />
            </button>
            <button
              className="hidden sm:block p-1.5 lg:p-2 hover:bg-gray-100 rounded-full transition"
              title="More options"
              aria-haspopup="true"
            >
              <Image
                src="/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
                alt="More options icon"
                width={4}
                height={16}
                className="lg:w-[4px] lg:h-[18px] object-contain"
              />
            </button>
          </div>
        </div>
      </header>

     
      {hasMounted && isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex justify-end">
          <div
            className={clsx(
              'bg-white w-64 h-full shadow-xl p-4 transform transition-transform duration-300 ease-in-out',
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-[#072635]">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close menu"
              >
                <Image src="/icons/hamburger-6-svgrepo-com.svg" alt="Close" width={20} height={20} className="object-contain" />
              </button>
            </div>
            <nav className="space-y-2">
              {navItems.map(({ label, href, icon }) => {
                const isActive = pathname === href;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                      isActive ? 'bg-[#01F0D0] text-[#072635]' : 'text-[#072635] hover:bg-gray-100'
                    )}
                  >
                    <Image src={icon} alt={`${label} icon`} width={20} height={20} className="object-contain" />
                    <span className="font-medium text-sm">{label}</span>
                  </a>
                );
              })}
            </nav>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/patients/dr_jose.png"
                  alt="Dr. Jose"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm text-[#072635]">Dr. Jose Simmons</p>
                  <p className="text-xs text-gray-500">General Practitioner</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 p-2 bg-gray-100 rounded-lg flex items-center justify-center gap-2">
                  <Image src="/icons/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="Settings" width={16} height={16} className="object-contain" />
                  <span className="text-sm text-[#072635]">Settings</span>
                </button>
                <button className="flex-1 p-2 bg-gray-100 rounded-lg flex items-center justify-center gap-2">
                  <Image src="/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="More options" width={4} height={16} className="object-contain" />
                  <span className="text-sm text-[#072635]">More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;