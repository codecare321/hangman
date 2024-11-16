import getButtonStyling from "./getButtonStyling";

const Button = ({
  text,
  onClickHandler,
  styleType = "primary",
  type = "button",
}) => {
  return (
    <>
      <button
        onClick={onClickHandler}
        type={type}
        className={`px-4 py-2 ${getButtonStyling(
          styleType
        )} text-white bg-blue-500`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
