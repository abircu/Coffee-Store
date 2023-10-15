import React from "react";

const AddCoffe = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const suplierName = form.suplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;

    const newCoffee = { name, suplierName, taste, category, details };
    console.log(newCoffee);
    console.log("butotoms dsfjsd");
  };
  return (
    <div className="bg-[#F4F3F0] ">
      <div>
        <h1 className="text-5xl text-[#374151] text-center">Add New Coffee</h1>
        <p className="text-center text-gray-700 mb-6">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br />
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed <br /> to
          using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-center px-6 md:px-20">
          <div className="grid col-span-1 w-full gap-4 justify-center mb-4">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Type here name here"
              className="input input-bordered input-primary "
            />
            <label>Suplier name</label>
            <input
              type="text"
              name="suplier"
              placeholder="Type here suplier name"
              className="input input-bordered input-primary "
            />
            <label>Taste</label>
            <input
              type="text"
              name="teste"
              placeholder="Type here teste"
              className="input input-bordered input-primary "
            />
          </div>
          {/* another colums */}
          <div className="grid col-span-1 w-full justify-center gap-4 mb-4">
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Type here your category"
              className="input input-bordered input-primary "
            />
            <label>Details</label>
            <input
              type="text"
              name="details"
              placeholder="Type here about Details"
              className="input input-bordered input-primary "
            />
            <label>Optional</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary "
            />
          </div>
          <div className="grid col-span-2 w-[60%] mx-[20%] ">
            <label>Photo URL</label>
            <input
              className="px-3 py-2 mb-4"
              type="text"
              name="photourl"
              id=""
              placeholder="Enter Photo URL"
            />
          </div>
        </div>
        <input
          className="p-2 bg-[#D2B48C] rounded-lg"
          type="submit"
          value="Add coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffe;
