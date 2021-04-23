import React, { useState } from "react";

import './style.css';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const { target: { value }} = event;
        let willUpdate = true;

        if(typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const UseInput = () => {
    const maxLen = (value) => value.length <= 10;
    const include = (value) => value.includes("@");
    const name = useInput("Mr.", include);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" value={name.value} onChange={name.onChange}/>
        </div>
    );
};

export default UseInput;

// {name.value} 는 {...name} 이라고 해도 가능