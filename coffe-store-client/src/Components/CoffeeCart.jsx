import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, suplier, taste, category, details } = coffee;
  const handleDelete = (_id) => {
    console.log("Delete id", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
        <Link to={`/updateCoffe/${_id}`}>
          <button className="btn btn-secondary">Edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCart;
