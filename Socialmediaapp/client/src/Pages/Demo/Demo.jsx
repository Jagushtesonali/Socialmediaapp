import React, { useState } from 'react'
import './Demo.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '../../Components/Card/Card';
function Demo() {
   const [showinput,setshowinput] = useState(false)
   const [shownav,setshownav] = useState(false)

   let box = document.querySelector(".product-container")

   const prevbtn = ()=>{
 let width = box.clientWidth;
 box.scrollLeft =box.scrollLeft - width;

   }
   const nextbtn = ()=>{
    let width = box.clientWidth;
    console.log(width)
    box.scrollLeft =box.scrollLeft + width;
   }

   const data = [
    {
        image:"https://th.bing.com/th/id/OIP.ggAEYhS8PrZ_O8ItnnWCdgHaLH?pid=ImgDet&rs=1",
        name:"Product1"

    },
    
    {
        image:"https://th.bing.com/th/id/OIP.7X52YOgGEQmWrR28c_tLAwHaHa?pid=ImgDet&rs=1",
        name:"Product2"

    },
    {
        image:"https://th.bing.com/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?pid=ImgDet&rs=1",
        name:"Product1"

    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/29360452568197.5914d0225e4cd.jpg",
        name:"Product1"

    },
    {
        image:"https://th.bing.com/th/id/OIP.ggAEYhS8PrZ_O8ItnnWCdgHaLH?pid=ImgDet&rs=1",
        name:"Product1"

    },
    {
        image:"https://th.bing.com/th/id/OIP.ggAEYhS8PrZ_O8ItnnWCdgHaLH?pid=ImgDet&rs=1",
        name:"Product1"

    },
    {
        image:"https://th.bing.com/th/id/OIP.ggAEYhS8PrZ_O8ItnnWCdgHaLH?pid=ImgDet&rs=1",
        name:"Product1"

    },
    {
        image:"https://th.bing.com/th/id/OIP.ggAEYhS8PrZ_O8ItnnWCdgHaLH?pid=ImgDet&rs=1",
        name:"Product1"

    },
    

    
    
   ]
  return (
   <>
     <header className='header'>
       <a href="" className='logo'>GroceryApp</a>
       <nav className={shownav ?"activemenu":""}>
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
        <a href="#Categories">Categories</a>
        <a href="#Share">Share</a>
        <a href="#Blog">Blog</a>
       </nav>
       <div className='icons'>
      
        <div onClick={()=>{setshowinput(!showinput)}}><SearchIcon/></div>
        <div><PersonIcon/></div>
        <div onClick={()=>{setshownav(!shownav)}}><MenuIcon/></div>
       </div>
       <div className={showinput? "activeinput":"serchinput"}>
        <input type="text" name="" id="" placeholder='search here...'/>
     </div>
     </header>

<div className='product-corosole'>
    <button className='prev' onClick={prevbtn}><ArrowBackIosIcon/></button>
    
    <div className='product-container'>
       {
        data && data.map((m)=>{
            return(
                <>
                 <Card prop={m}/>
                </>
            )
        })
       }
     
     
    </div>
    <button className='next' onClick={nextbtn}><ArrowForwardIosIcon/></button>

</div>
  
  





   
   </>
  )
}

export default Demo
