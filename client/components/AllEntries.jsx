import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Entry from './Entry.jsx'
import Card from './Card.jsx';

const AllEntries = props => {
    // const [entries, setEntry] = useState([]);
    const [show, setShow] = useState(false);
    const [entry, setEntry] = useState('');
    const [allEntries, setAllEntries] = useState([])

    const handleSubmit = e => {
        setShow(false);
        fetch('/Entries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({entry: entry})
        })
        .then(response => {
            response.json()
        })
        .then(response => {
            const newEntries = allEntries;
            fetch('/Entries')
            .then(res => res.json())
            .then((entries) => {
                const copy = [];
                for (let i = 0; i < entries.length; i++) {
                    // console.log(entries[i].entry)
                    copy.push(<Card key={i} entry={entries[i].entry} date={entries[i].date}/>)
                }
                setRenderEntries(copy)
                setAllEntries(entries)
            })
        })
        .catch(err => {
            console.error("Error: ", err);
        })
    }
    // handleChange
    const handleChange = e => {
        setEntry(e.target.value)
    }
    const [renderEntries, setRenderEntries] = useState([])
    useEffect(() => {
        fetch('/Entries')
            .then(res => res.json())
            .then((entries) => {
                const copy = [];
                for (let i = 0; i < entries.length; i++) {
                    // console.log(entries[i].entry)
                    copy.push(<Card key={i} entry={entries[i].entry} date={entries[i].date}/>)
                }
                setRenderEntries(copy)
                setAllEntries(entries)
            })
            console.log(renderEntries)
    },[])

    return (
        <div className="AllEntries">
            <h1>My Journal Entries</h1>  
            <div className="entriesContainer">
                {renderEntries}
            </div>
            
            <div className="button-container">
                <button className="addEntry" onClick={() => setShow(true)}>+</button>   
            </div>
            <Entry onSubmit={handleSubmit} onClose={() => setShow(false)} onChange={handleChange} show={show}/>
        </div>

    )
}
// 
export default AllEntries;