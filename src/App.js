import React from 'react';
import ChangeBackground from './ChangeBackground';
import NavigationBar from './NavigationBar';
import AllJobsListing from './AllJobsListing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Store';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <ChangeBackground/>
                <NavigationBar/>
                <Routes>
                    <Route index element={<AllJobsListing/>}/>
                </Routes>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;