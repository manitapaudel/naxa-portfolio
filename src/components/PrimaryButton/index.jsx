const PrimaryButton = ({ type = "button", children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary hover:bg-buttonHover text-secondary font-semibold text-15 py-2 px-6"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
