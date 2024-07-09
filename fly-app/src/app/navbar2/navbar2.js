// src/app/navbar2/navbar2.js
"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './navbar2.css';

const Navbar2 = () => {
    const [date, setDate] = useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [deliveryDate, setDeliveryDate] = useState(null);

    return (
        <div className="navbar2">
            <div className="filterItem">
                <p>Date</p>
                <div className="inputWithIcon">
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        placeholderText="Select Date"
                        dateFormat="dd/MM/yyyy"
                    />
                    <i className="calendarIcon"></i>
                </div>
            </div>
            <div className="filterItem">
                <p>Date Range</p>
                <div className="inputWithIcon">
                    <DatePicker
                        selected={dateFrom}
                        onChange={(date) => setDateFrom(date)}
                        placeholderText="From"
                        dateFormat="dd/MM/yyyy"
                    />
                    <i className="calendarIcon"></i>
                </div>
                <div className="inputWithIcon">
                    <DatePicker
                        selected={dateTo}
                        onChange={(date) => setDateTo(date)}
                        placeholderText="To"
                        dateFormat="dd/MM/yyyy"
                    />
                    <i className="calendarIcon"></i>
                </div>
            </div>
            <div className="filterItem">
                <p>Type of Product</p>
                <input placeholder="Type of product" />
            </div>
            <div className="filterItem">
                <p>Customer Name</p>
                <input />
            </div>
            <div className="filterItem">
                <p>Lot Number</p>
                <input />
            </div>
            <div className="filterItem">
                <p>Delivery Time</p>
                <div className="inputWithIcon">
                    <DatePicker
                        selected={deliveryDate}
                        onChange={(date) => setDeliveryDate(date)}
                        placeholderText="Select Date"
                        dateFormat="dd/MM/yyyy"
                    />
                    <i className="calendarIcon"></i>
                </div>
            </div>
            <button className="clearButton">Clear filter</button>
        </div>
    );
}

export default Navbar2;



