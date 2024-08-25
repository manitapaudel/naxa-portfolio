import { useState } from "react";

import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";

const initialState = {
  name: "",
  address: "",
  email: "",
  contact: "",
  photo: null,
  cv: null,
};

const UserForm = ({ onClose }) => {
  const [inputValues, setInputValues] = useState(initialState);
  const [errors, setErrors] = useState({ ...initialState, photo: "", cv: "" }); // Errors that may arise during form validation

  // To validate the email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file") {
      // to handle the file inputs; photo and cv

      setInputValues((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
      if (value !== null)
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else if (type === "tel") {
      const numericValue = value.replace(/[^0-9]/g, ""); // to make sure the user only inputs number
      setInputValues((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));
      if (value !== "")
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      if (value !== "")
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

      setInputValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      //   validating the email input while user is typing
      if (type === "email") {
        if (validateEmail(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" })); // Clear error if user updates the email according to the required format
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Please enter a valid email address",
          }));
        }
      }
    }
  };

  const validateInputs = () => {
    let isValid = true;
    const { name, address, email, contact, photo, cv } = inputValues;

    const errorCopy = { ...initialState, photo: "", cv: "" };

    if (!name.trim()) {
      errorCopy.name = "Please enter a name";
      isValid = false;
    }
    if (!address.trim()) {
      errorCopy.address = "Please enter an address";
      isValid = false;
    }
    if (!email.trim()) {
      errorCopy.email = "Please enter an email";
      isValid = false;
    }
    if (!contact.trim()) {
      errorCopy.contact = "Please enter a contact";
      isValid = false;
    }
    if (photo === null) {
      errorCopy.photo = "Please upload a photo";
      isValid = false;
    }
    if (cv === null) {
      errorCopy.cv = "Please upload a cv";
      isValid = false;
    }
    setErrors(errorCopy);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let's validate the form inputs, before we get to submit them
    const isValid = validateInputs();
    if (isValid) {
      onClose();
      alert("form submitted successfully!");
      console.log({ inputValues });
    }
  };

  return (
    <div className="bg-white w-1/2 py-8 px-6 rounded">
      <h2 className="text-2xl font-semibold mb-3.75">Let&apos;s talk!</h2>
      <p>Want to join our team? Please fill up your details and submit.</p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <InputField
            label="Name"
            name="name"
            value={inputValues.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            label="Address"
            name="address"
            value={inputValues.address}
            onChange={handleChange}
            error={errors.address}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={inputValues.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Contact"
            name="contact"
            type="tel"
            value={inputValues.contact}
            onChange={handleChange}
            error={errors.contact}
          />
          <span className="flex justify-between">
            <InputField
              label="Upload your Photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
              error={errors.photo}
            />
            <InputField
              label="Upload your CV (PDF)"
              name="cv"
              type="file"
              accept=".pdf"
              onChange={handleChange}
              error={errors.cv}
            />
          </span>
        </div>

        <PrimaryButton type="submit">Apply now</PrimaryButton>
      </form>
    </div>
  );
};

export default UserForm;
