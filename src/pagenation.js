import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function PageNation(){

        {/* navbar for the pagenation  */}
    return(
        <>
        <Navbar fixed='bottom' className='justify-content-center'>

            <Navbar.Brand className="bg-light text-primary"style={{padding:"5px",borderRadius:"10px"}}href="/">1</Navbar.Brand>
            <Navbar.Brand className="bg-light text-primary"style={{padding:"5px",borderRadius:"10px"}}href="News2">2</Navbar.Brand>
            <Navbar.Brand className="bg-light text-primary"style={{padding:"5px",borderRadius:"10px"}}href="News3">3</Navbar.Brand>
            <Navbar.Brand className="bg-light text-primary"style={{padding:"5px",borderRadius:"10px"}}href="News4">4</Navbar.Brand>

        </Navbar>
        </>
    )

}

export default PageNation