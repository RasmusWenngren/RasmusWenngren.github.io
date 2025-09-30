import { useState, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, title, children, ariaLabelledBy = 'modal-title' }) {
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Handle mounting/unmounting
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Store previous focus element when modal opens
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;

      // Focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus();
      }

      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else if (previousFocusRef.current) {
      // Restore focus when modal closes
      previousFocusRef.current.focus();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Click outside to close
  const handleBackdropClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  }, [onClose]);

  // Don't render on the server
  if (!isMounted) {
    return null;
  }

  return createPortal(
      <div
          className={`modal ${isOpen ? 'show' : ''}`}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="presentation"
          aria-hidden={!isOpen}
      >
        <div
            className="modal-content"
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy}
        >
          <button
              className="close-modal"
              onClick={onClose}
              aria-label="Close modal"
          >
            &times;
          </button>

          {title && <h2 id={ariaLabelledBy}>{title}</h2>}
          {children}
        </div>
      </div>,
      document.body
  );
}


