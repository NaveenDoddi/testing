import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function PageNation(){
    function next(){
        var pageNum = parseInt(window.location.href.split("/")[3].split("")[4])+1
        
        window.location.href = "http://localhost:3000/News"+ pageNum

    }
    function prev(){
        var pageNum = parseInt(window.location.href.split("/")[3].split("")[4])-1

        if(pageNum <= 0){
            pageNum = 1
        } 
        window.location.href = "http://localhost:3000/News"+ pageNum
        
    }

        {/* navbar for the pagenation  */}
    return(
        <>
        {/* <Navbar fixed='bottom' className='justify-content-center'>

            <Navbar.Brand className="bg-light"style={{padding:"5px",borderRadius:"10px"}}href="/">1</Navbar.Brand>
            <Navbar.Brand className="bg-light"style={{padding:"5px",borderRadius:"10px"}}href="News2">2</Navbar.Brand>
            <Navbar.Brand className="bg-light"style={{padding:"5px",borderRadius:"10px"}}href="News3">3</Navbar.Brand>
            <Navbar.Brand className="bg-light"style={{padding:"5px",borderRadius:"10px"}}href="News4">4</Navbar.Brand>

        </Navbar> */}
        
        <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
            <div onClick={prev} style={{height:"30px",width:"40px"}} className='border text-center float-left bg-light'><a className='text-dark text-decoration-none'>prev..</a></div>
            <div style={{height:"30px",width:"40px"}} className='border border-light text-center float-left bg-dark'><a className='text-light text-decoration-none' href="News1">1</a></div>
            <div style={{height:"30px",width:"40px"}} className='border border-light text-center float-left bg-dark'><a className='text-light text-decoration-none' href="News2">2 </a></div>
            <div style={{height:"30px",width:"40px"}} className='border border-light text-center float-left bg-dark'><a className='text-light text-decoration-none' href="News3">3 </a></div>
            <div style={{height:"30px",width:"40px"}} className='border border-light text-center float-left bg-dark'><a className='text-light text-decoration-none' href="News4">4 </a></div>
            <div onClick={next} style={{height:"30px",width:"40px"}} className='border text-center float-left bg-light'><a className='text-dark text-decoration-none'> ..next </a></div>
        </div>
        </>
    )

}

export default PageNation