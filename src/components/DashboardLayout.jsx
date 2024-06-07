import React, { useState } from 'react';
import DashboardMain from './DasboardMain';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Modal from './Modal';
import { ModalProvider } from '../context/ModalContext';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
      <ModalProvider>
        <div className="bg-boxdark-2">
          <div className="flex h-screen overflow-hidden">
            <DashboardMain sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <Outlet />
                </div>
              </main>
            </div>
            <Modal />
          </div>
        </div>
      </ModalProvider>
  );
};

