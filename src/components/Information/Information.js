import React from "react";
import './Information.css';

const Information =  () => {
    return(
        <React.Fragment>
            <section className="h-64 underPolygon mx-4"></section>
            <div className='boxUnderPolygon flex transform -translate-y-48 h-0 mx-8 bg-red-500 bg-opacity-20 justify-center '>
                <div className="box p-10 mr-8 pb-28 bg-black rounded-lg border-4 text-white border-white transform -translate-y-4  -rotate-1" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum assumenda adipisci hic id, rerum harum earum dicta dolore ipsum sit incidunt quos doloribus atque quidem consectetur nesciunt perferendis a iste.</div>
                <div className="box p-10 ml-8 pb-28 bg-black rounded-lg border-4 text-white border-white transform -translate-y-4 rotate-1" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
            </div>

            <section className="h-64 mx-4 transform underPolygon-inverse "></section>
            <div className="boxUnderPolygon flex flex-wrap sm:flex-nowrap transform -translate-y-64 h-0 mx-8 bg-red-500 bg-opacity-20 justify-center">
                <div className="box p-10 pb-40 mr-8 bg-black rounded-lg border-4 text-white border-white transform translate-y-4 rotate-1" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum assumenda adipisci hic id, rerum harum earum dicta dolore ipsum sit incidunt quos doloribus atque quidem consectetur nesciunt perferendis a iste.</div>
                <div className="box p-10 pb-40 mr-8 bg-black rounded-lg border-4 text-white border-white transform -rotate-1" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
                <div className="box p-10 pb-40 bg-black rounded-lg border-4 text-white border-white transform -translate-y-6 rotate-2" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
            </div>
            { /*
            <section className="grid grid-cols-3 h-72 py-4 mx-4 transform -translate-y-3/4 underPolygon-inverse ">
                
            </section>
            <div className="boxUnderPolygon flex transform -translate-y-full justify-center py-4">
                <div className="p-10 mb-64 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform rotate-3" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum assumenda adipisci hic id, rerum harum earum dicta dolore ipsum sit incidunt quos doloribus atque quidem consectetur nesciunt perferendis a iste.</div>
                <div className="p-10 mb-64 mt-12 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform -rotate-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
                <div className="p-10 mb-64 mt-12 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform -rotate-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
            </div> */}
        </React.Fragment>
    )
}

export { Information };