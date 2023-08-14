import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx'
import Entry from './components/Entry.jsx'
import AllEntries from './components/AllEntries.jsx'

import './styles.css'


const App = props => {
	return (
		<>
			<nav transition={{ delay: 1 }} className="navbar-container">
                <li>
                    <Link className="navbar-item" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/Entries">Entries</Link>
                </li>
            </nav>
            <div className="line-break"></div>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/Entries" element={<AllEntries />}/>
			</Routes>
		</>
	)
}
export default App;