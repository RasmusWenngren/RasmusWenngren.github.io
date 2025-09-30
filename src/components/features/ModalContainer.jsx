
import { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import Modal from '../../components/common/Modal';


export default function ModalContainer() {
    const { isOpen, modalContent, closeModal } = useModal();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {isOpen && modalContent && (
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title={modalContent.title}
                >
                    <p>{modalContent.content}</p>
                </Modal>
            )}
        </>
    );
}
