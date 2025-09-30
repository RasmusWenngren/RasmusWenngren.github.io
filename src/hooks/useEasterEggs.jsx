import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export function useEasterEggs() {
    const { changeBackgroundColor } = useTheme();
    const [showSecretModal, setShowSecretModal] = useState(false);
    const secretCodeRef = useRef('');
    const targetCode = '1337';

    useEffect(() => {
        // Easter egg 1: Change background color on copyright click
        const copyrightLink = document.querySelector('footer a:first-child');

        const handleCopyrightClick = (e) => {
            e.preventDefault();
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            changeBackgroundColor(randomColor);
        };

        if (copyrightLink) {
            copyrightLink.addEventListener('click', handleCopyrightClick);
        }

        // Easter egg 2: Secret code entry
        const handleKeyUp = (event) => {
            secretCodeRef.current += event.key;

            if (secretCodeRef.current.length > targetCode.length) {
                secretCodeRef.current = secretCodeRef.current.slice(-targetCode.length);
            }

            if (secretCodeRef.current === targetCode) {
                setShowSecretModal(true);
                secretCodeRef.current = '';
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        // Cleanup
        return () => {
            if (copyrightLink) {
                copyrightLink.removeEventListener('click', handleCopyrightClick);
            }
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [changeBackgroundColor]);

    return {
        showSecretModal,
        closeSecretModal: () => setShowSecretModal(false)
    };
}
