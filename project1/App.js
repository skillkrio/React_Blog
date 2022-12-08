import Content from "./Content";
import Header from "./Header";
import SearchItem from "./SearchItem";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useState } from "react";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const handleSubmit = (eve) => {
    eve.preventDefault();
    //Handling if input is undefined/false
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const setAndSave = (newItemsList) => {
    setItems(newItemsList);
    localStorage.setItem("shoppingList", JSON.stringify(newItemsList));
  };
  //adding new Item to List
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSave(listItems);
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems);
  };
  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}
export default App;
