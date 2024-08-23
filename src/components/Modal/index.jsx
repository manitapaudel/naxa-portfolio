const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-900 bg-opacity-50">
      {children}
      <button
        className="text-white hover:text-primary text-4xl"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default Modal;
