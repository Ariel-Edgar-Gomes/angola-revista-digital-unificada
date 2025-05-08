
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-radial from-metodista-blue/5 to-transparent pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22 opacity=%22.04%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22 fill=%22%23003366%22/%3E%3C/svg%3E')] pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white/90 backdrop-blur-[120px] pointer-events-none -z-10" />
      
      <Header />
      <main className="flex-grow relative">
        <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-metodista-blue/5 to-transparent -z-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-metodista-blue/3 to-transparent -z-5"></div>
        
        {/* Decorative elements */}
        <div className="fixed top-20 right-20 w-64 h-64 bg-metodista-gold/10 rounded-full blur-3xl animate-pulse opacity-30 pointer-events-none"></div>
        <div className="fixed bottom-20 left-10 w-72 h-72 bg-metodista-blue/10 rounded-full blur-3xl animate-pulse opacity-20 pointer-events-none"></div>
        
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
