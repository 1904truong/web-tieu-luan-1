import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogsDetails'
import PlaceRoute from './pages/PlaceRoute'
import NoPage from './pages/NoPage'
import Layout from './pages/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
    React.useEffect(() => {
      AOS.init({
        offset:100,
        duration: 900,
        easing:'ease-in-sine',
        delay:100,
      });
      AOS.refresh();
    }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogs/:id" element={<BlogsDetails/>}/>
            <Route path="/places" element={<PlaceRoute/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
