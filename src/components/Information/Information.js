import React from "react";
import './Information.css';

const Information =  () => {
    return(
        <React.Fragment>
            <section className="grid grid-cols-2 py-4 mx-4 underPolygon ">
                <div className="p-10 ml-20 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform -rotate-3" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum assumenda adipisci hic id, rerum harum earum dicta dolore ipsum sit incidunt quos doloribus atque quidem consectetur nesciunt perferendis a iste.</div>
                <div className="p-10 mt-12 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform rotate-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
            </section>
            <section className="grid grid-cols-3 py-4 mx-4 bg-red-300 underPolygon-inverse ">
                <div className="p-10 ml-20 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform rotate-3" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum assumenda adipisci hic id, rerum harum earum dicta dolore ipsum sit incidunt quos doloribus atque quidem consectetur nesciunt perferendis a iste.</div>
                <div className="p-10 mt-12 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform -rotate-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
                <div className="p-10 mt-12 m-10 bg-gray-100 rounded-lg bg-opacity-90 border-4 border-black transform -rotate-3" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos repellat sed alias! Officia, nam totam, modi, suscipit officiis necessitatibus nostrum nemo repellat iusto inventore consequuntur molestiae? Perferendis voluptas ea sed? </div>
            </section>
        </React.Fragment>
    )
}

export { Information };