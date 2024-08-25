import { useSelector } from "react-redux";

import HighlightCard from "@/components/HighlightCard";

const KeyHighlights = () => {
  const { keyHighlights } = useSelector((state) => state.projects);

  const sortedHighlights = [...keyHighlights].sort((a, b) => {
    const aDate = new Date(a.end_date);
    const bDate = new Date(b.end_date);
    return bDate - aDate; // the project with latest end_date comes first in the list
  });

  return (
    <>
      <div className="pb-20">
        <div className="grid grid-cols-2 gap-y-10 items-center">
          {sortedHighlights.map((highlight) => (
            <HighlightCard highlight={highlight} key={highlight.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyHighlights;
