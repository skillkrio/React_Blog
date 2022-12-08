import Content from "./Content";
import Header from "./Header";
import SearchItem from "./SearchItem";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";
function App() {
  const API_URL = "http://localhost:4000/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Expected Data did not receive");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);
  const handleSubmit = (eve) => {
    eve.preventDefault();
    //Handling if input is undefined/false
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  //adding new Item to List
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };
  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    const myItem = listItems.filter((item) => item.id === id);
    const reqUrl = `${API_URL}/${id}`;
    const patchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const result = await apiRequest(reqUrl, patchOptions);
    if (result) setFetchError(result);
  };
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const myItem = listItems.filter((item) => item.id === id);
    const reqUrl = `${API_URL}/${id}`;
    const deleteOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myItem[0]),
    };
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
      <main>
        {isLoading && <p>Loading state...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error:${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}
export default App;
