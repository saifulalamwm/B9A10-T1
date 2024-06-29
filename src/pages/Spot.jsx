import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Spot = () => {
  const spots = useLoaderData();
  const { _id } = useParams();

  const {
    name,
    photo,
    description,
    zone,
    averageCost,
    visitor,
    seasonality,
    travelTime,
    location,
  } = spots;

  const handleAddToList = () => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    const existingSpot = myList.find((spot) => spot.name === name);
    if (!existingSpot) {
      myList.push({ _id, name, photo, description, zone });
      localStorage.setItem("myList", JSON.stringify(myList));
      Swal.fire({
        title: "Good job!",
        text: `${name} has been add to the list`,
        icon: "success",
      });
    } else {
      console.log("Item already exists in the list");
    }
  };
  //   const handleAddToList = () => {
  //     const myList = JSON.parse(localStorage.getItem("myList")) || [];
  //     myList.push({ _id, name, photo });
  //     localStorage.setItem("myList", JSON.stringify(myList));
  //   };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 m-auto mt-20">
        <figure className="lg:w-1/2 md:full">
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2 md:full">
          <h2 className="card-title capitalize font-bold text-cyan-600">
            {name}
          </h2>
          <p>{description}</p>
          <p>Zone: {zone}</p>
          <p>Cost: {averageCost}</p>
          <p>Visitors: {visitor}</p>
          <p>Seasonality: {seasonality}</p>
          <p>Travel Time: {travelTime}</p>
          <p>Location: {location}</p>

          <div className="card-actions justify-end">
            <Link to={-1}>
              <button className="btn bg-cyan-600 text-white">Go Back</button>
            </Link>
            <button
              className="btn bg-cyan-600 text-white"
              onClick={handleAddToList}
            >
              Add to My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;
