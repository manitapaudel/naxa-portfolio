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

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file") {
      // to handle the file inputs; photo and cv
      setInputValues((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setInputValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    console.log(inputValues);
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
          />
          <InputField
            label="Address"
            name="address"
            value={inputValues.address}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={inputValues.email}
            onChange={handleChange}
          />
          <InputField
            label="Contact"
            name="contact"
            value={inputValues.contact}
            onChange={handleChange}
          />
          <span className="flex justify-between">
            <InputField
              label="Upload your Photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            <InputField
              label="Upload your CV (PDF)"
              name="cv"
              type="file"
              accept=".pdf"
              onChange={handleChange}
            />
          </span>
        </div>

        <PrimaryButton onClick={handleSubmit}>Apply now</PrimaryButton>
      </form>
    </div>
  );
};

export default UserForm;
