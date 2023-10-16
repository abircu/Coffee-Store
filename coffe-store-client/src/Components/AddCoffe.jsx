import Swal from "sweetalert2";

const AddCoffe = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const suplier = form.suplier.value;
    const taste = form.taste.value;
    const category = form.Category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, suplier, taste, category, details, photo };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "User added succesfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
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
        <div className="flex w-full p-10 md:p-24 gap-6 flex-col md:flex-row">
          <div className=" form-control w-full md:w-[45%] gap-4">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
              className=" p-2"
            />
            <label>suplier</label>
            <input
              type="text"
              name="suplier"
              id=""
              placeholder="Enter suplier name"
              className=" p-2"
            />
            <label>Taste</label>
            <input
              type="text"
              name="taste"
              id=""
              placeholder="Enter taste"
              className=" p-2"
            />
          </div>
          <div
            className="form-control w-full
           md:w-[45%] gap-4"
          >
            <label>Category</label>
            <input
              type="text"
              name="Category"
              id=""
              placeholder="Enter category"
              className=" p-2"
            />
            <label>details</label>
            <input
              type="text"
              name="details"
              id=""
              placeholder="write details"
              className=" p-2"
            />
            <label htmlFor="">Photo URL</label>
            <input
              className=" p-2"
              type="text"
              name="photo"
              id=""
              placeholder="Enter your photo url here"
            />
          </div>
        </div>
        <input
          type="submit"
          value="submit"
          className="w-full bg-green-300 p-2"
        />
      </form>
    </div>
  );
};

export default AddCoffe;
