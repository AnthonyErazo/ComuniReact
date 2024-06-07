import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [modalContent, setModalContent] = useState(null);
    const [onAccept, setOnAccept] = useState(null);
    const [onCancel, setOnCancel] = useState(null);

    const openModal = (content, acceptCallback, cancelCallback) => {
        setModalContent(content);
        setOnAccept(() => acceptCallback);
        setOnCancel(() => cancelCallback);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        if (onCancel) {
            onCancel();
        }
    };
    const acceptModal = () => {
        setModalOpen(false);
        if (onAccept) {
            onAccept();
        }
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal, acceptModal }}>
            {children}
        </ModalContext.Provider>
    );
};
