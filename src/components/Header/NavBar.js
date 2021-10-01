import React from "react";
import './NavBar.css';


const NavBar = () => {
    return(
        <React.Fragment>
        {
            /* 
            <header className="
            grid grid-cols-3
            md:grid-cols-5
            bg-opacity-50
            bg-black
            text-black
            border-4
            border-white
            text-white
            gap-1
            py-5"
            
        >
        <button className="text-2xl neon-defualt-text"> Buy a Snack </button>
            <div className="md:col-span-3 text-4xl neon-defualt-text">
                Buy a Drink
            </div> 
            <button className="text-2xl neon-defualt-text"> Buy a Coffe</button>
        </header>
            */
        }
        <div className="flex justify-center bg-pink-800 h-32 transform underNavbar "> 
            <header className="box flex justify-between flex-grow mx-8 mt-4 p-8 h-0 bg-black rounded-lg border-4 text-white border-white transform -rotate-1" >
                <button className="text-2xl neon-defualt-text -m-4 transform rotate-1"> Buy a Snack </button>
                <div className="text-4xl neon-defualt-text -m-4 transform rotate-1">
                    Buy a Drink
                </div> 
                <button className="text-2xl neon-defualt-text -m-4 transform rotate-1"> Buy a Coffe</button>
            </header>
        </div>
        
        </ React.Fragment>
        
    )
}

export { NavBar };