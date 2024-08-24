import { useState } from "react";

import HighlightDetails from "@/components/HighlightDetails";
import Modal from "@/components/Modal";

const HighlightCard = ({ highlight }) => {
  const [showHighlightsDetails, setShowHighlightsDetails] = useState(false);

  const onClose = () => {
    setShowHighlightsDetails(false);
  };

  return (
    <>
      <div
        className="bg-secondary text-white max-w-155 cursor-pointer transition-all ease-in-out hover:delay-200 hover:shadow-2xl hover:-translate-y-2.5 mt-24"
        data-id={highlight.id}
        onClick={() => setShowHighlightsDetails(true)}
      >
        <div className=" pt-12 pb-4 px-8">
          <h3 className="text-2xl leading-8 font-semibold mb-5">
            {highlight.title}
          </h3>
          <p className="text-15 leading-6">{highlight.subtitle}</p>
          <div className="grid grid-cols-12 gap-10 mt-6 mb-4">
            <div className="col-span-6 px-2">
              <h5 className="text-primary text-13 font-semibold mb-0.5">
                Client
              </h5>
              <h6 className="text-13 font-semibold mb-0.5">
                {highlight.clients}
              </h6>
            </div>
            <div className="col-span-6 px-2">
              <h5 className="text-primary text-13 font-semibold mb-0.5">
                Time Duration
              </h5>
              <h6 className="text-13 font-semibold mb-0.5">
                {highlight.start_date} {highlight.end_date}
              </h6>
            </div>
          </div>
        </div>
        <figure className="w-full h-100">
          <img src={highlight.photo} alt={highlight.title} />
        </figure>
      </div>
      {showHighlightsDetails ? (
        <Modal onClose={onClose}>
          <HighlightDetails highlight={highlight} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default HighlightCard;
