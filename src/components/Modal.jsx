import React, { useEffect } from "react";

export default function Modal({ isOpen, setIsOpen, data }) {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isOpen]);
  return (
    <div className={`modal ${isOpen ? "show" : ""}`} onClick={setIsOpen}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={setIsOpen} aria-label="Close">
          &times;
        </button>
        {data && (
          <>
            <h2>{data.name}</h2>
            <p>{data.description || "No description available"}</p>
          </>
        )}
      </div>
    </div>
  );
}
