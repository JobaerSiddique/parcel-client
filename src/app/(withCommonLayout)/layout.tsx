
import { Footer } from '@/src/components/footer';
import { Navbar } from '@/src/components/navbar';
import React from 'react';

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar with sticky positioning and full width */}
            <div >
                <Navbar />
            </div>
            
            {/* Main content with proper padding and centered max-width */}
            <main className="flex-1 my-2 ">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
            
            {/* Footer with full width */}
           <Footer/>
        </div>
    );
};

export default Layout;