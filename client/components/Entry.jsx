import React, { Component } from 'react'
import { useState } from 'react';

const Entry = props => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="entryModal" onClick={props.onClose}>
            <div className="entryModalContent" onClick={e => e.stopPropagation()}>
                <div className="modalHeader">
                    <h1>New Entry</h1>
                    <button onClick={props.onClose}>X</button>
                </div>
                <textarea className="entryInput" onChange={props.onChange}></textarea>

                <button className="entrySubmit" onClick={props.onSubmit}>Submit</button>
            </div>
        </div>
    )
}
{/* <input className="entryInput" onChange={props.onChange}></input> */}
export default Entry; 