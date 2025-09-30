
import { useEasterEggs } from '../../hooks/useEasterEggs';
import Modal from '../../components/common/Modal';

/**
 * Secret Easter Egg Modal component
 */
export default function EasterEggContainer() {
    const { showSecretModal, closeSecretModal } = useEasterEggs();

    return (
        <>
            {showSecretModal && (
                <Modal
                    isOpen={showSecretModal}
                    onClose={closeSecretModal}
                    title="🎉 Congratz!"
                    ariaLabelledBy="easter-egg-title"
                >
                    <p>You found the easter egg! You really are 1337!</p>
                </Modal>
            )}
        </>
    );
}
