
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22 opacity=%22.05%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22 fill=%22%23003366%22/%3E%3C/svg%3E')] pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-white/80 backdrop-blur-[100px] pointer-events-none -z-10" />
      <Header />
      <main className="flex-grow relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-metodista-blue/5 to-transparent -z-5"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
