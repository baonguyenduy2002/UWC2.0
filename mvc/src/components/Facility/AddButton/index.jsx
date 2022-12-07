import React from 'react';

import "./AddButton.css";

function AddButton(props) {
    return (
        <>
            <button 
                className='AddButton' 
                type='button'
            >
                {props.name}
            </button>
        </>
    );
}

export default AddButton;