import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        autoFocus
        required
        value={newItem}
        ref={inputRef}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
