import Button from "../components/Button/Button";
import TextInput from "../components/TextInput/TextInput";

function TextInputForm({ handleFormSubmit, handleTextInputChange }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="Enter a word or phrase"
          placeholder="Enter your word or phrase here ..."
          onChangeHandler={handleTextInputChange}
        />
      </div>

      <div>
        <Button styleType="warning" text="Show / Hide" />
      </div>

      <div>
        <Button type="submit" styleType="primary" text="Submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
