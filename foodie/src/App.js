import React from 'react'
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import ShopsPage from './Pages/ShopsPage/ShopsPage'
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Items from './Pages/Items/Items';
import Suggest from './Pages/Shopsuggestion/Suggest';

const App = () => {
  return (
    <div>
    
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<MainPage />} />
                    <Route path="/shops" exact element={<ShopsPage />} />
                    <Route path="/items" exact element={<Items />} />
                    <Route path="/suggest" exact element={<Suggest/>} />
                    <Route exact path="shops/:shopID" element={<Items/>} />
                </Routes>
            </Router>
       
        </div>
  )
}

export default App