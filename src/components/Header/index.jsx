import { useState } from "react";

import PrimaryButton from "@/components/PrimaryButton";
import Modal from "@/components/Modal";
import UserForm from "@/components/UserForm";
import MapComponent from "@/components/MapComponent";

const Header = () => {
  // state to handle the visibility of the modal
  const [showFormModal, setShowFormModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const onFormClose = () => {
    setShowFormModal(false);
  };

  const onMapClose = () => {
    setShowMapModal(false);
  };
  return (
    <>
      <div className="bg-gray-200 bg-opacity-40 py-20">
        <div className="container mx-auto">
          <nav className="flex justify-between">
            <PrimaryButton onClick={() => setShowMapModal(true)}>
              View Maps
            </PrimaryButton>
            <PrimaryButton onClick={() => setShowFormModal(true)}>
              User Form
            </PrimaryButton>
          </nav>
          <div className="container mx-auto py-10">
            <h6 className="uppercase text-buttonHover text-center text-17 font-semibold mb-6.25">
              Portfolio
            </h6>
            <h1 className="w-2/3 mx-auto text-center text-56">
              Diverse, <span className="text-secondary">Impactful</span>, and
              Reliable.
            </h1>
          </div>
        </div>
      </div>
      {showFormModal ? (
        <Modal onClose={onFormClose}>
          <UserForm onClose={onFormClose} />
        </Modal>
      ) : (
        <></>
      )}
      {showMapModal ? (
        <Modal onClose={onMapClose}>
          <MapComponent />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
