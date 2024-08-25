const ScrollToTop = ({ handleScrollToTop }) => {
  return (
    <div className="" onClick={handleScrollToTop}>
      <button
        className="fixed bottom-16 right-7 cursor-pointer bg-primary bg-opacity-20 hover:bg-opacity-100 shadow-xl p-3.75 rounded-full"
        title="scroll to top"
      >
        <img src="/chevron-top.svg" alt="Up arrow" />
      </button>
    </div>
  );
};

export default ScrollToTop;
