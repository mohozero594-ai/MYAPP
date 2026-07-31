import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home/Home"
import Blog from "./Pages/Blog/Blog"
import BlogDetails from "./Pages/BlogDetails/Blogdetails"
import NotFound from "./Pages/NotFound/NotFound"


function App() {

  let routes = createBrowserRouter([
    {path : "" , element : <MainLayout/> , children:[
      {index : true, element : <Home/>},
      {path : "Blog" , element :<Blog/>},
      {path : "/Blog/:slug" , element :<BlogDetails/>},
      {path : "*" ,element : <NotFound/>}
    ]}
  ])

  return (
    <>
   <RouterProvider router={routes} />
    </>
  )
}

export default App
