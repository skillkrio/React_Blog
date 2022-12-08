import "./CenterContainer.css";
import ColorInput from "./ColorInput";
const CenterContainer = ({ color, setColor }) => {
  return (
    <main className="center">
      <div className="centerbox" style={{ background: `${color}` }}>
        {color.length === 0 ? <p>Empty Value</p> : <p>{color}</p>}
      </div>
      <ColorInput color={color} setColor={setColor} />
    </main>
  );
};

export default CenterContainer;
