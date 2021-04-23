import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import UseState from './useState/UseState';
import UseInput from './useState/UseInput';

ReactDOM.render(
    <>
        <UseState />
        <UseInput />
    </>
    , document.getElementById('root')
);