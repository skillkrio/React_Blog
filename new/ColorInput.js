import "./ColorInput.css";
const ColorInput = ({ color, setColor }) => {
  return (
    <form className="searchColor">
      <input
        type="text"
        autoFocus
        name="searchColor"
        placeholder="Type the Color"
        value={color}
        onChange={(evt) => setColor(evt.target.value)}
      />
    </form>
  );
};

export default ColorInput;
