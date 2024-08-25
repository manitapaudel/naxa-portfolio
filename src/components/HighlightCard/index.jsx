import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HighlightDetails from "@/components/HighlightDetails";
import Modal from "@/components/Modal";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      // type: "spring",
      duration: 0.8,
    },
  },
};

const HighlightCard = ({ highlight }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [showHighlightsDetails, setShowHighlightsDetails] = useState(false);

  const onClose = () => {
    setShowHighlightsDetails(false);
  };

  useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    } else {
      controls.start("offscreen");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="offscreen"
        animate={controls}
      >
        <div
          className="bg-secondary text-white max-w-155 cursor-pointer transition-all ease-in-out hover:delay-200 hover:shadow-2xl hover:-translate-y-2.5 my-12"
          data-id={highlight.id}
          onClick={() => setShowHighlightsDetails(true)}
        >
          <div className="pt-12 pb-4 px-8">
            <h3 className="text-2xl leading-8 font-semibold mb-5">
              {highlight.title}
            </h3>
            <p className="text-15 leading-6">{highlight.subtitle}</p>
            <div className="grid grid-cols-12 gap-10 mt-6 mb-4">
              <div className="col-span-6 px-2">
                <h5 className="text-buttonHover text-13 font-semibold mb-0.5">
                  Client
                </h5>
                <h6 className="text-13 font-semibold mb-0.5">
                  {highlight.clients}
                </h6>
              </div>
              <div className="col-span-6 px-2">
                <h5 className="text-buttonHover text-13 font-semibold mb-0.5">
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
      </motion.div>
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
