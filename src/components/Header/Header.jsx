import React from 'react';
import './Header.css';

const OrderButton = ({ foodDisplayRef }) => {
    const handleScroll = () => {
        if (foodDisplayRef.current) {
            foodDisplayRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleScroll} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 w-45 flex items-center justify-center space-x-3 group">
            <span>Order Now</span>
            <div className="bg-white rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </button>
    );
};

const Header = ({ foodDisplayRef }) => {
    return (
        <div className="header">
            <div className="header-contents">
                <OrderButton foodDisplayRef={foodDisplayRef} />
            </div>
        </div>
    );
};

export default Header;