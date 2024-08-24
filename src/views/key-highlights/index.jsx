import { useSelector } from "react-redux";

import HighlightCard from "@/components/HighlightCard";

const KeyHighlights = () => {
  const { keyHighlights } = useSelector((state) => state.projects);

  return (
    <>
      <div className="pb-20">
        <div className="grid grid-cols-2 gap-y-10 items-center">
          {keyHighlights.map((highlight) => (
            <HighlightCard highlight={highlight} key={highlight.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyHighlights;
