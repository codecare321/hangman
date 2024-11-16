import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  function handleTextInputChange(e) {
    console.log(e.target.value);
  }

  return (
    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
    />
  );
}

export default TextInputFormContainer;
