// src/app/components/CustomTable.js
import React from 'react';
import './table.css';

const Table = () => {
    return (
        <table className="customTable">
            <thead>
                <tr>
                    <th className="column1">S No.</th>
                    <th className="column2">Sales Order Date</th>
                    <th className="column3">Packing House Location</th>
                    <th className="column4">Sales Order</th>
                    <th className="column5">Customer Name</th>
                    <th className="column6">Type of Product</th>
                    <th className="column7">Qty(kg)</th>
                    <th className="column8">#Pre Packs</th>
                    <th className="column9">Detected QRs</th>
                    <th className="column10">Successfully Activated QRs</th>
                    <th className="column11">Lot Number</th>
                    <th className="column12">Total Delivery Time</th>
                    <th className="column13">Scanned with installed Silal apps</th>
                    <th className="column14"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="column1">1</td>
                    <td className="column2">03-09-2023</td>
                    <td className="column3">Al-Ain-FOAH-Stores</td>
                    <td className="column4"><button>SO/2023</button></td>
                    <td className="column5">Abu-Dhabhi Coorperative Society</td>
                    <td className="column6">Cucumber</td>
                    <td className="column7">12.5</td>
                    <td className="column8">25</td>
                    <td className="column9"><button style={{ color: 'black', backgroundColor: 'white',width:'30px' }}>17</button></td>
                    <td className="column10"><button style={{ color: 'black', backgroundColor: 'white',width:'30px' }}>21</button></td>
                    <td className="column11">Data 11</td>
                    <td className="column12"><button>24</button></td>
                    <td className="column13">2</td>
                    <td className="column14"><div className="track">Track</div></td>
                </tr>
                {/* Add more rows as needed */}
            </tbody>
        </table>
    );
}

export default Table;
