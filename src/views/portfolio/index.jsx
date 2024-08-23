import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomTab from "@/components/CustomTab";
import { fetchProjectsRequest } from "./slice";

const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, [dispatch]);

  console.log({ loading });
  console.log({ error });
  console.log({ data });

  useEffect(() => {
    navigate("/keyhighlights");
  });

  return (
    <>
      <div className="">
        <CustomTab />
      </div>
    </>
  );
};

export default Portfolio;
