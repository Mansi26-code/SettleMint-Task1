// components/footer.js
import React from 'react';
import './footer.css';

const FooterTable = () => {
  const rows = [
    ['1', '03-09-2023', 'Al-Ain-FOAH-Stores', <button>SO/2023</button>, 'Abu-Dhabhi Coorperative Society', 'Cucumber', '12.5', '25', <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>17</button>, <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>21</button>, 'Data 11', <button>24</button>, '2', <div className="track">Track</div>],
    ['2', '04-09-2023', 'Al-Ain-FOAH-Stores', <button>SO/2023</button>, 'Dubai Supermarket', 'Tomato', '20', '50', <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>30</button>, <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>35</button>, 'Data 11', <button>30</button>, '3', <div className="track">Track</div>],
    ['3', '05-09-2023', 'Al-Ain-FOAH-Stores', <button>SO/2023</button>, 'Sharjah Grocery', 'Potato', '15', '40', <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>25</button>, <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>28</button>, 'Data 11', <button>20</button>, '4', <div className="track">Track</div>],
    ['4', '06-09-2023', 'Al-Ain-FOAH-Stores', <button>SO/2023</button>, 'Abu-Dhabhi Coorperative Society', 'Onion', '18', '45', <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>22</button>, <button style={{ color: 'black', backgroundColor: 'white', width: '30px' }}>27</button>, 'Data 11', <button>22</button>, '5', <div className="track">Track</div>],
  ];

  return (
    <div className="tableContainer">
      <table className="table">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((data, colIndex) => (
                <td key={colIndex} className={`column${colIndex + 1}`}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FooterTable;



