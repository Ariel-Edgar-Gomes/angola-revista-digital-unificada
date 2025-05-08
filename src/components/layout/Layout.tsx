
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 bg-gradient-radial from-[#1b1464]/5 to-transparent pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22 opacity=%22.04%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22 fill=%22%231b1464%22/%3E%3C/svg%3E')] pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white/90 backdrop-blur-[120px] pointer-events-none -z-10" />
      
      <Header />
      <main className="flex-grow relative">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-[#1b1464]/5 to-transparent -z-5"></div>
        {/* Bottom gradient with university colors */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#e53935]/3 to-transparent -z-5"></div>
        
        {/* Enhanced decorative elements */}
        <div className="fixed top-20 right-20 w-64 h-64 bg-[#e53935]/10 rounded-full blur-3xl animate-pulse opacity-30 pointer-events-none"></div>
        <div className="fixed bottom-20 left-10 w-72 h-72 bg-[#1b1464]/10 rounded-full blur-3xl animate-pulse opacity-20 pointer-events-none"></div>
        
        {/* Angular decorative elements */}
        <div className="fixed top-40 left-0 w-40 h-80 bg-gradient-to-r from-[#1b1464]/3 to-transparent skew-x-12 transform-gpu opacity-20 pointer-events-none -z-5"></div>
        <div className="fixed bottom-0 right-0 w-60 h-60 bg-gradient-to-l from-[#e53935]/3 to-transparent -skew-x-12 transform-gpu opacity-20 pointer-events-none -z-5"></div>
        
        {/* Enhanced bottom pattern inspired by the logo */}
        <div className="fixed bottom-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 10%22 width=%22100%22 height=%2210%22%3E%3Cpath d=%22M0,5 L10,0 L20,5 L30,0 L40,5 L50,0 L60,5 L70,0 L80,5 L90,0 L100,5%22 fill=%22none%22 stroke=%22%23e53935%22 stroke-width=%221%22 opacity=%220.2%22/%3E%3C/svg%3E')] bg-repeat-x pointer-events-none opacity-30 -z-5"></div>
        
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
