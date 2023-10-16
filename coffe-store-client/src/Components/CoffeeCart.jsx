import React from "react";

const CoffeeCart = ({ coffee }) => {
  const { photo, name, suplier, taste, category, details } = coffee;
  return (
    <div className=" flex  justify-between  w-full bg-base-200 p-4">
      <div className="pl-4 my-[18%] ">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
      <div className="pl-4 flex-1 flex flex-col  justify-center  text-start">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="py-4 text-xl">{suplier}</p>
        <p className="py-4  text-xl">{taste}</p>
        <p className="py-4 text-xl">{category}</p>
        <p className="py-4 text-xl">{details}</p>
      </div>
      <div className="btn-group btn-group-vertical space-y-4 flex flex-col justify-center">
        <button className="btn btn-primary">View</button>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-success">Delete</button>
      </div>
    </div>
  );
};

export default CoffeeCart;
