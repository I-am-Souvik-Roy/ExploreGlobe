import React from 'react';
import './app.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/> 
        </>
    )
}

export default App;