import React from "react";

function Modal({ isOpen, onClose, onSave, children, title }) {
  if (!isOpen) return null;

  return (
    <div
      id="widget-modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {children}
        <div className="flex justify-end mt-4">
          <button
            onClick={onSave}
            className="bg-green-500 text-white hover:bg-green-600 p-2 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white hover:bg-red-600 p-2 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
