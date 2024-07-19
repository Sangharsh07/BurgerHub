import { useState, useRef } from 'react';
import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
    const [category, setCategory] = useState("All");
    const foodDisplayRef = useRef(null); // Create a reference for FoodDisplay

    return (
        <div>
            <Header foodDisplayRef={foodDisplayRef} /> {/* Pass the reference to Header */}
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay ref={foodDisplayRef} category={category} /> {/* Attach the reference to FoodDisplay */}
            <AppDownload />
        </div>
    );
};

export default Home;