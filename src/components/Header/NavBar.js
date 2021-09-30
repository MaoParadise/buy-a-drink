import React from "react";
import './NavBar.css';


const NavBar = () => {
    return(
        <header className="
            grid grid-cols-3
            md:grid-cols-5
            bg-opacity-50
            bg-black
            text-white
            gap-1
            py-5
            border-b-4"
        >
            <button className="text-2xl"> Buy a Snack </button>
            <div className="md:col-span-3 text-4xl">
                Buy a Drink
            </div> 
            <button className="text-2xl"> Buy a Coffe</button>
        </header>
    )
}

export { NavBar };