import React from 'react'
import './Comment.scss'
function Comment() {
    const comment =[
        {
            profile:"https://www.viewstorm.com/wp-content/uploads/2015/04/beautiful-girls.jpg",
            name:"chetan gangan",
            comment:" nice pic "
        },
        {
            profile:"https://www.viewstorm.com/wp-content/uploads/2015/04/beautiful-girls.jpg",
            name:" Soham Jagushte",
            comment:"awsome photo"
        },
        {
            profile:"https://www.free-photos.biz/images/people/girls/an_11-year-old_girl_photographed_in_june_2015_07.jpg",
            name:"Sayali jagushte",
            comment:" very very beautifull"
        }
    ]
  return (

    <>
    <div className='comment-box'>
        <div className='addcomment'>
            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" />
            <input type="text" />
        </div>
       {comment && comment.map((m)=>{return(<>
       
        <div className='comment'>
            <img src={m.profile} alt="" />
            <div>
                <span>{m.name}</span>
                <p>{m.comment}</p>
            </div>
        </div>
       
       
       
       </>)})}
    </div>
    
    
    </>
  )
}

export default Comment
