import React, { useState } from "react";
import data from "./data";
import './Accordian.css';

const Accordian = () => {

    const [singleSelected, setSingleSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleSelected, setMultipleSelected] = useState([]);

    const singleSelection = (currentId) => {
        console.log(currentId);
        setSingleSelected(currentId === singleSelected ? null : currentId);
    }

    const multiSelection = (currentId) => {
        let selectedItems = [...multipleSelected];
        const findIndexOfSelectedItem = selectedItems.indexOf(currentId);

        if (findIndexOfSelectedItem === -1) selectedItems.push(currentId);
        else selectedItems.splice(findIndexOfSelectedItem, 1);

        setMultipleSelected(selectedItems);
        console.log(findIndexOfSelectedItem, multipleSelected);
    }

    return (
        <div className="acc-container">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} style={{ padding: '20px', borderRadius: '10px', fontSize: '15px', cursor: 'pointer' }}>Enable Multi Selection</button>
            <div className="acc-box">
                {
                    data && data.length > 0 ?
                        data.map((dataItem, i) => (
                            <div key={i} onClick={() => enableMultiSelection ? multiSelection(dataItem.id) : singleSelection(dataItem.id)} className="item">
                                <div className="title">
                                    <p>{dataItem.question}</p>
                                    <span style={{ fontSize: '20px' }}>+</span>
                                </div>
                                {singleSelected === dataItem.id || multipleSelected.indexOf(dataItem.id) !== -1 ?
                                    <div className="inner-acc">{dataItem.answer}</div>
                                    : null}
                            </div>
                        ))
                        : <div>No Data Found !</div>
                }
            </div>
        </div >
    );
}

export default Accordian;