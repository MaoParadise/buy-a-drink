import './DrinkTable.css'
import React from 'react'
import barman2 from '../../images/barman2.png'


const DrinkTable = () => {
    return(
        <section className ="grid grid-cols-2">
            <div className='ellipseChoise'>
                <div className="choise">
                    
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <img className='barman' src={barman2} alt='' />
            </div>
            
        </section>
    )
}

export {DrinkTable}