// src/app/navbar/navbar.js
"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import 'react-datepicker/dist/react-datepicker.css';
import './navbar.css';

const Navbar = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className="navbar">
            <div className="text">Please enter SO number</div>
            <div className="navbarmid">
                <input placeholder="Search SO ID..." />
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Enter Date"
                    dateFormat="dd/MM/yyyy" // Adjust date format as needed
                />

                <button className="search">Search</button>
            </div>

            <div className="navbarRight">
                <div className="pdf"></div>
                <div className="exel"></div>
                <div className="line"></div>
                <div className="filter">
                    <FilterAltIcon/><span>Filter</span>
                </div>


            </div>
        </div>
    );
}

export default Navbar;


