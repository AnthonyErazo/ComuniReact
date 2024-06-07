import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (type, message) => {
        const id = new Date().toString();
        setAlerts((prevAlerts) => [...prevAlerts, { id, type, message }]);
        setTimeout(() => {
            setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
        }, 5000); 
    };

    return (
        <AlertContext.Provider value={{ addAlert }}>
            {children}
            <div className="fixed bottom-0 right-0 z-[999] m-4 space-y-4">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`relative flex items-center  p-4 mb-4 text-sm border rounded-lg ${alert.type === 'error' ? 'text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800' : 'text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800'
                            }`}
                        role="alert"
                    >
                        <svg
                            className="flex-shrink-0 inline w-4 h-4 mr-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">{alert.type === 'error' ? 'Danger alert!' : 'Success alert!'}</span> {alert.type=='error'?alert.message||'Error inesperado':alert.message}
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
                        <div className={`h-1 ${alert.type === 'error' ?'bg-red-800':'bg-green-800'} progress-bar`}></div>
                    </div>
                    </div>
                ))}
            </div>
        </AlertContext.Provider>
    );
};
