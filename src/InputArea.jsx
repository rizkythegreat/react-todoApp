import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newItems = event.target.value;
        setInputText(newItems)
    }
    return (<div className="form">
        <input
            type="text"
            onChange={handleChange}
            value={inputText}
        />
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText("");
        }}>
            <span>Add</span>
        </button>
    </div>);
}

export default InputArea;