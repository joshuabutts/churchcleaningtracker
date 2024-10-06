import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    user?: {
        name: string;
        congregation?: string;
    };
}


const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="w-full bg-gray-100 shadow-md sticky top-0">
            <div className="max-w-site mx-auto flex justify-between items-center px-8 py-4">
                <div className="flex items-center">
                    <Image src="/holyhandslogo.png" alt="Logo" width={215} height={42} className="mr-4" />
                </div>
                <div className="flex flex-col items-end space-y-2">
                    {user ? (
                        <>
                            <span className="font-bold text-gray-800">{user.name}</span>
                            {user.congregation && (
                                <span className="text-sm text-gray-600">{user.congregation}</span>
                            )}
                        </>
                    ) : (
                        <Link
                            href="/signup"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Sign Up
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
