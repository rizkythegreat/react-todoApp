import React, { useState } from "react";
import TodoItem from "./ToDoItem";

function App() {
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newItems = event.target.value;
        setInputText(newItems)
    }
    const [items, setItems] = useState([]);
    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }
    function deleteItem(id) {
        setItems((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputText}
                />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <TodoItem
                            key={index}
                            id={index}
                            text={item}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;