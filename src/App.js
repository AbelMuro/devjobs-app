import React from 'react';
import ChangeBackground from './ChangeBackground';
import NavigationBar from './NavigationBar';
import AllJobPostings from './AllJobPostings';
import PostDetails from './PostDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Store';
import './styles.css';

const setTheme = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return { type: 'set initial theme', theme: prefersDarkMode};
  };
  
  store.dispatch(setTheme());

function App() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <ChangeBackground/>
                <NavigationBar/>
                <Routes>
                    <Route path='/' element={<AllJobPostings/>}/>
                    <Route path='/ListingDetails' element={<PostDetails/>}/>
                </Routes>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;