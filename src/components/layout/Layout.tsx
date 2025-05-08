
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-metodista-light">
      <Header />
      <main className="flex-grow relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-metodista-blue/5 to-transparent -z-10"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
