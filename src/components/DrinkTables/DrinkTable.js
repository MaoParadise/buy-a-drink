import './DrinkTable.css'
import React from 'react'
import barman from '../../images/barman.png'


const DrinkTable = () => {
    return(
        <section className="grid grid-cols-2">
            <div className="col-span-1 ml-3">
                <div className="transform md:translate-x-1/3 lg:translate-x-2/3 flex justify-center items-center">
                    <div className="bg-white p-1 options">
                        <div className="options p-14 bg-black neon-text"> Tenemos una nueva seleccion <br/> variada solo para usted. </div>
                    </div> 
                </div>
                <div className="answer-talk ">
                    <div className="py-8">
                        <div className="flaming-text border-2 border-white bg-black text-white mb-2 py-4" value="" key=""> tenetur officiis esse corrupti necessitatibus libero! Exercitationem aliquid voluptas ullam commodi mollitia. </div>
                        <div className="flaming-text border-2 border-white bg-black text-white mb-2 py-4" value="" key=""> Numquam officiis ipsam ut. Quod commodi doloribus, hic magnam distinctio  </div>
                        <div className="flaming-text border-2 border-white bg-black text-white mb-2 py-4" value="" key=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </div>
                        <div className="flaming-text border-2 border-white bg-black text-white mb-2 py-4" value="" key="">  dolore ipsum sit incidunt quos doloribus atque quidem consectetur nesciunt p </div>
                    </div>
                    
                </div>
            </div>  
            <div className="col-span-1">
                <img class="barman" src={barman} alt="" />
            </div>
        </section>
    )
}

export {DrinkTable}