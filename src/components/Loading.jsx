import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center bg-primary justify-center bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-4 h-10 rounded-[12px] bg-blue-500 animate-wave1"></div>
        <div className="w-4 h-10 rounded-[12px] bg-blue-500 animate-wave2"></div>
        <div className="w-4 h-10 rounded-[12px] bg-blue-500 animate-wave3"></div>
      </div>
    </div>
  );
}

export default Loading;
