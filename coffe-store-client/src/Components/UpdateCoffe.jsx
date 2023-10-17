import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const handleUpdateCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const suplier = form.suplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, suplier, taste, category, details, photo };
    console.log("updated coffe", updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee updated succesfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  const coffee = useLoaderData();
  // console.log("update coffee data", coffee);
  const { _id, photo, name, suplier, taste, category, details } = coffee;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Update coffee</h1>
      <form onSubmit={handleUpdateCoffe}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-10 bg-orange-100 p-6">
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              id=""
              defaultValue={name}
              placeholder="Update name"
              className="p-2 bg-gray-200"
            />
            <input
              type="text"
              name="suplier"
              id=""
              defaultValue={suplier}
              placeholder="Update suplier "
              className="p-2 bg-gray-200"
            />
            <input
              type="text"
              name="taste"
              id=""
              defaultValue={taste}
              placeholder="update taste"
              className="p-2 bg-gray-200"
            />
          </div>
          <div className="grid gap-4">
            <input
              type="text"
              name="category"
              id=""
              defaultValue={category}
              placeholder="Update category"
              className="p-2 bg-gray-200"
            />
            <input
              type="text"
              name="details"
              id=""
              defaultValue={details}
              placeholder="Update details "
              className="p-2 bg-gray-200"
            />
            <input
              type="text"
              name="photo"
              id=""
              defaultValue={photo}
              placeholder="update photo"
              className="p-2 bg-gray-200"
            />
          </div>
        </div>
        <button className="btn btn-success w-full">Update</button>
        <Link to="/" className="flex justify-center mt-6">
          <button className="btn btn-secondary">Back</button>
        </Link>
      </form>
    </div>
  );
};
export default UpdateCoffe;
