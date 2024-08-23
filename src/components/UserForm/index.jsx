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

const UserForm = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState); // Errors that may arise during form validation

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
    } else {
      if (value !== "")
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

      setInputValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      //   Validating the email input while user is typing
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

    const errorCopy = initialState;

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

  const handleSubmit = () => {
    // Let's validate the form inputs, before we get to submit them
    if (validateInputs()) {
      alert(JSON.stringify(inputValues));
      console.log({ inputValues });
    }
  };

  return (
    <div className="bg-white w-1/2 py-8 px-6 rounded">
      <h2 className="text-2xl font-semibold mb-3.75">Let&apos;s talk!</h2>
      <p>Want to join our team? Please fill up your details and submit.</p>
      <form className="mt-6">
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

        <PrimaryButton onClick={handleSubmit}>Apply now</PrimaryButton>
      </form>
    </div>
  );
};

export default UserForm;
