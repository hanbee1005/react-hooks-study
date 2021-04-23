import React, { useState } from "react";

import './style.css';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target);
    };
    return { value, onChange };
};

const UseInput = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" value={name.value} onChange={name.onChange}/>
        </div>
    );
};

export default UseInput;

// {name.value} 는 {...name} 이라고 해도 가능