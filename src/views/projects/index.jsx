import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HighlightCard from "@/components/HighlightCard";
import PrimaryButton from "@/components/PrimaryButton";
import Modal from "@/components/Modal";
import UserForm from "@/components/UserForm";
import { fetchProjectsRequest } from "./slice";

const highlight = {
  id: 20,
  category_title: [
    "Open Data Initiatives",
    "Software & Application Development",
  ],
  category_description: [
    "<p>We prioritize the generation and use of Open data, particularly open spatial data through platforms like OpenStreetMaps.We have worked on a number of open mapping data initiatives through our own in house investment and also in partnership with other organizations.</p>",
    "<p>We develop software solutions both web and mobile applications across a wide range of thematic sectors.</p>",
  ],
  focus_area: [],
  photo: "https://admin.naxa.com.np/media/pics/innov.png",
  title: "National Innovation Digital Network",
  subtitle:
    "An open data initiative to Identify, Map, and Disseminate information regarding innovators and their innovation in Nepal and beyond.",
  clients:
    "A partnership initiative with Robotics Association of Nepal for NAST Nepal",
  start_date: "2020-05-01",
  end_date: "2020-07-30",
  description:
    "<p>National Innovation Digital Network (NIDN) is a noble initiative to identify, map, and disseminate information regarding innovators and their innovation in Nepal and beyond. This initiative aims to serve as a platform for the innovators to share their innovative works along with details such as the nature of their innovations, its current status in terms of implementation, types of support they need to scale up, contact details and many more. The project team at NAXA worked as a technical partner for Robotics Association of Nepal (RAN) and has been supporting Nepal Academy of Science and Technology (NAST) in the development and implementation and NIDN. The technical team provided the following services::</p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p>Conceptualized and designed the web pages for the National Innovation digital network.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Designed and developed a web-based digital data collection form to collect data on innovators and their works.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Developed a web mapping interface where people could add details about their new initiatives and also visualize the details shared by several individuals and organizations.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Developed an analytical platform where users can filter, query and visualize innovations around Nepal under different thematic categories.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Actively reached out to individuals, groups of individuals, private and non-government organizations to collect details regarding their initiatives during Covid-19 pandemic.</p>\r\n\t</li>\r\n</ul>",
  is_key_highlight: true,
  project_order: 6,
  created_at: "2020-12-16T12:19:56.356459+05:45",
  updated_at: "2021-01-08T11:33:27.948618+05:45",
  ongoing: false,
  project_url: null,
  is_international_projects: false,
  category: [9, 3],
};

const Projects = () => {
  // state to handle the visibility of the modal
  const [showFormModal, setShowFormModal] = useState(true);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjectsRequest());
  }, [dispatch]);

  console.log({ loading });
  console.log({ error });
  console.log({ data });

  const onClose = () => {
    setShowFormModal(false);
  };
  return (
    <>
      <div>
        <PrimaryButton onClick={() => setShowFormModal(true)}>
          User Form
        </PrimaryButton>
        <div className="py-20">
          <HighlightCard highlight={highlight} />
        </div>
      </div>
      {showFormModal ? (
        <Modal onClose={onClose}>
          <UserForm />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Projects;
