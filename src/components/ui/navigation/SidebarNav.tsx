'use client'

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx'
import { usePathname } from 'next/navigation';

const SidebarNav: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="space-y-4">
            <div className="space-y-2">
                <Link href="/" className={clsx("block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-md", pathname === "/" && "bg-gray-100 text-blue-700")}>
                    My Schedule
                </Link>
                <Link href="/volunteer" className={clsx("block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-md", pathname.match(/^\/volunteer/) && "bg-gray-100 text-blue-700")}>
                    Available Assignments
                </Link>
            </div>
            <hr className="border-gray-200" />
            <div className="space-y-2">
                <Link href="/supplies" className={clsx("block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md", pathname === "/supplies" && "bg-gray-100")}>
                    Supplies
                </Link>
                <Link href="" className={clsx("block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md", pathname === "/logout" && "bg-gray-100")}>
                    Log Out
                </Link>
            </div>
        </nav>
    );
};

export default SidebarNav;
