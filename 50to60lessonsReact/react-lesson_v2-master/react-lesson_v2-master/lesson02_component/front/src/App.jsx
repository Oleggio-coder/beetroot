import {Route, Routes} from "react-router-dom";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import HeaderMain from "./common/header/Header";
import {Footer} from "./component/arrowComp";

import './style.css'


export default function App() {
    return (
        <>
            <HeaderMain/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>

            <Footer />
        </>

    )
}