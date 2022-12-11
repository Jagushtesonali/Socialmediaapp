import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Stories.scss'
function Stories() {
   
const data = [
    {
        name:"Safak lama",
        image:"https://th.bing.com/th/id/R.e0bdfc36aa747b1d792389026311db26?rik=E8r%2fJsKZTvzSlA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f22784-nature-landscape-lake-sky.jpg&ehk=AZBAleRfHY3o5Rnyt6zg7lLOPiLS8eZzXlWj11BMYG8%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name:"Sayali",
        image:"https://wallup.net/wp-content/uploads/2019/05/10/179414-parks-belgium-flemish-region-meise-fog-trees-nature-autumn.jpg"
    },
    {
        name:"Soham",
        image:"https://www.consortiumeducation.com/media/catalog/product/cache/14/image/9df78eab33525d08d6e5fb8d27136e95/210165_1.jpg"
    },
    {
        name:"Chetam gangan",
        image:"https://i.pinimg.com/474x/18/e9/67/18e9675a35e7fe5786fbabe66e606cbe--very-busy-seed-pods.jpg"
    },
    {
        name:"Aditya",
        image:"https://th.bing.com/th/id/R.9caa677edf95f8b7a9653c3fa58083c4?rik=trXRUkl2W7v0xQ&riu=http%3a%2f%2fsophiemunns.weebly.com%2fuploads%2f5%2f1%2f7%2f3%2f5173708%2fpublished%2fbangalow-2.jpg%3f1540813932&ehk=%2fX3i6gBCUxZHlDUio7u0uUUkVl8pSVYpvgB3A0H30yg%3d&risl=&pid=ImgRaw&r=0"
    }

]





  return (
  <>
  <div className='story-container'>
  <div className='story'>
    <div className='addstory'>
      <img src="https://wallpapercave.com/wp/wp2004894.jpg" alt="" />
      <AddCircleIcon className='addimage'/>
      <span>Sonali jagushte</span>
    </div>
  {data && data.map((m)=>{return(<>
    <div className='addstory'>
      <img src={m.image} alt="" />
    
      <span>{m.name}</span>
    </div>
  </>)}) }
   
   </div>
   
  
  </div>
  
  
  </>
   )
}

export default Stories
