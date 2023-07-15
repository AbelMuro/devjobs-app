import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Navigation';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index element={<>home</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;