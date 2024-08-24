import parse from "html-react-parser";

const HighlightDetails = ({ highlight }) => {
  return (
    <div className="bg-white w-4/5 max-h-[70vh] overflow-y-scroll">
      <div className="flex items-center">
        <figure className="w-1/3">
          <img src={highlight.photo} alt={highlight.title} />
        </figure>
        <div className=" pt-12 pb-4 px-8">
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
            <div className="col-span-6 px-2">
              <h5 className="text-buttonHover text-13 font-semibold mb-0.5">
                Focus Area
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 highlight-description">
        {parse(highlight.description)}
      </div>
    </div>
  );
};

export default HighlightDetails;
