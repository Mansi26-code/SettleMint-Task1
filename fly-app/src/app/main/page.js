// src/app/main/page.js
// src/app/main/page.js
import React from 'react';
import Header from '../header/Header.js';
import Navbar from '../navbar/navbar.js'
import Navbar2 from '../navbar2/navbar2.js'
import Table from '../table/table.js'
import Midbody from '../midbody/midbody.js'
import Lowerbody from '../lowerbody/lowerbody.js'
import FooterTable from '../footer/footer.js'

const Main = () => {
    return (
        <>
         <Header />
         <Navbar/>
         <Navbar2/>
         <br></br>
         <br/>
         <Table/>
         <Midbody/>
         <Lowerbody/>
         <FooterTable/>
           

           
        </>
    );
}

export default Main;

