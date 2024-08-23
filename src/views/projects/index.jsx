import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PrimaryButton from "@/components/PrimaryButton";
import Modal from "@/components/Modal";
import UserForm from "@/components/UserForm";
import CustomTab from "@/components/CustomTab";
import { fetchProjectsRequest } from "./slice";

const Projects = () => {
  // state to handle the visibility of the modal
  const [showFormModal, setShowFormModal] = useState(false);
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
      <div className="">
        <div className="bg-gray-200 bg-opacity-40 py-20">
          <div className="container mx-auto">
            <nav className="flex justify-between">
              <PrimaryButton>View Maps</PrimaryButton>
              <PrimaryButton onClick={() => setShowFormModal(true)}>
                User Form
              </PrimaryButton>
            </nav>
            <div className="container mx-auto py-16">
              <h6 className="uppercase text-buttonHover text-center text-17 font-semibold">
                Portfolio
              </h6>
              <h1 className="w-2/3 mx-auto text-center text-56">
                Diverse, <span className="text-secondary">Impactful</span>, and
                Reliable.
              </h1>
            </div>
          </div>
        </div>
        <CustomTab />
      </div>
      {showFormModal ? (
        <Modal onClose={onClose}>
          <UserForm onClose={onClose} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Projects;
