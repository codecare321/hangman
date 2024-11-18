import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted", value);
    if (value) {
      setTimeout(() => {
        navigate("/play", { state: { wordSelected: value } });
      }, 1000);
    }
  }

  function handleTextInputChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleShowHideClick() {
    console.log("show hide click");
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
