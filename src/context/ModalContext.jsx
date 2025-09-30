import { createContext, useContext, useState } from 'react';

// Create context with default value
const ModalContext = createContext();

// Custom hook for using the modal context
export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}

// Provider component
export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // Function to open modal with content
    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
        // Ensure focus is trapped inside modal when open
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Function to close modal
    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                modalContent,
                openModal,
                closeModal
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}
