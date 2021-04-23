import React, { useState } from "react";

import './style.css';

const UseState = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return (
        <div className="App">
            <h1>useState {item}</h1>
            <button onClick={incrementItem}>+</button>
            <button onClick={decrementItem}>-</button>
        </div>
    );
};

export default UseState;

/**
 * useState를 사용하지 않았을 경우
 */

// class UglyState extends React.Component {
//     state = {
//         item: 1
//     };

//     render() {
//         const { item } = this.state;
//         return (
//         <div className="App">
//             <h1>Hello {item}</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             <button onClick={this.incrementItem}>+</button>
//             <button onClick={this.decrementItem}>-</button>
//         </div>
//         );
//     }

//     incrementItem = () => {
//         this.setState((state) => {
//         return {
//             item: state.item + 1
//         };
//         });
//     };

//     decrementItem = () => {
//         this.setState((state) => {
//         return {
//             item: state.item + 1
//         };
//         });
//     };
// }