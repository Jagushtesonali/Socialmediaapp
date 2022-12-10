
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Leftbar from './Components/Leftbar/Leftbar';
import Navbar from './Components/Navbar/Navbar';
import Rightbar from './Components/Rightbar/Rightbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Registe/Register';
import './App.css'

function App() {

  const Loayout = ()=>{

    return(
    
    <div>
  <Navbar/>
  <div style={{display:"flex",margin:"5px"}}>

    <Leftbar/>
    <Outlet/>
    <Rightbar/>
  </div>

    </div>
    
    )
  }

const router = createBrowserRouter([
  {
    path:"/",
    element:<Loayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/profile/:id",
        element:<Profile/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
  
])




  return (
    <div>
   <RouterProvider router={router}></RouterProvider>
    
   </div>
      );


}

export default App;
