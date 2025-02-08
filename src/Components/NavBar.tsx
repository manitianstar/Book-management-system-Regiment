"use client";

import Link from "next/link";
import React from "react";

type NavbarProps = {
  scrollToHome?: () => void;
  scrollToFeatures?: () => void;
  scrollToHowItWorks?: () => void;
};

const NavBar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-neutral-900 bg-opacity-70 text-white p-4 fixed w-full z-50 shadow-md">

      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Branding/Logo */}
        <div className="text-xl font-bold">Book Management</div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6 justify-center items-center gap-2">
          <li>
            <Link href="/" className="hover:underline font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/AddBook" className="hover:underline font-medium">
              Add Book
            </Link>
          </li>
        </ul>

        {/* Right: Placeholder or additional options */}
        <div>
          <Link href="/BookCart" className="hover:underline font-medium">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
              >
                <path
                  d="M22.6668 8.56335C22.6409 8.22781 22.4891 7.91449 22.2418 7.68623C21.9945 7.45798 21.67 7.33168 21.3335 7.33268H17.3335V5.99935C17.3335 4.58486 16.7716 3.22831 15.7714 2.22811C14.7712 1.22792 13.4147 0.666016 12.0002 0.666016C10.5857 0.666016 9.22914 1.22792 8.22895 2.22811C7.22875 3.22831 6.66685 4.58486 6.66685 5.99935V7.33268H2.66685C2.33032 7.33168 2.00586 7.45798 1.75856 7.68623C1.51126 7.91449 1.35943 8.22781 1.33352 8.56335L0.114851 24.4607C0.0865544 24.8271 0.134293 25.1954 0.255072 25.5424C0.37585 25.8895 0.56706 26.2079 0.816704 26.4776C1.06635 26.7472 1.36904 26.9624 1.70577 27.1096C2.04251 27.2567 2.40603 27.3327 2.77352 27.3327H21.2269C21.5942 27.3327 21.9576 27.2567 22.2943 27.1097C22.6309 26.9626 22.9335 26.7475 23.1831 26.478C23.4328 26.2085 23.624 25.8903 23.7449 25.5434C23.8657 25.1965 23.9136 24.8283 23.8855 24.462L22.6668 8.56335ZM9.33352 12.666C9.33352 13.0196 9.19304 13.3588 8.94299 13.6088C8.69294 13.8589 8.35381 13.9993 8.00018 13.9993C7.64656 13.9993 7.30742 13.8589 7.05737 13.6088C6.80733 13.3588 6.66685 13.0196 6.66685 12.666V9.99935H9.33352V12.666ZM9.33352 5.99935C9.33352 5.29211 9.61447 4.61383 10.1146 4.11373C10.6147 3.61363 11.2929 3.33268 12.0002 3.33268C12.7074 3.33268 13.3857 3.61363 13.8858 4.11373C14.3859 4.61383 14.6669 5.29211 14.6669 5.99935V7.33268H9.33352V5.99935ZM17.3335 12.666C17.3335 13.0196 17.193 13.3588 16.943 13.6088C16.6929 13.8589 16.3538 13.9993 16.0002 13.9993C15.6466 13.9993 15.3074 13.8589 15.0574 13.6088C14.8073 13.3588 14.6669 13.0196 14.6669 12.666V9.99935H17.3335V12.666Z"
                  fill="#D4D4D4"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
