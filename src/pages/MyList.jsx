import { useState, useEffect } from "react";
import MyListCard from "../component/MyListCard";
import Swal from "sweetalert2";

const MyList = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList"));
    if (storedList) {
      setMyList(storedList);
    }
  }, []);

  const handleRemoveFromList = (spotName) => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your list has been deleted.",
          icon: "success",
        });
        setMyList((prevList) =>
          prevList.filter((spot) => spot.name !== spotName)
        );
      }
    });
    localStorage.setItem(
      "myList",
      JSON.stringify(myList.filter((spot) => spot.name !== spotName))
    );
  };

  return (
    <div className="w-11/12 m-auto">
      <h2 className="text-2xl font-bold mb-4">My List</h2>
      <div className="grid grid-cols-1  gap-5">
        {myList.map((spot) => (
          <MyListCard
            key={spot.name}
            spot={spot}
            handleRemoveFromList={handleRemoveFromList}
          ></MyListCard>

          //   <li key={spot._id} className="mb-4">
          //     <img src={spot.photo} alt={spot.name} className="w-72" />
          //     <span className="ml-4">{spot.name}</span>
          //     <button
          //       className="btn bg-red-600 text-white ml-4"
          //       onClick={() => handleRemoveFromList(spot.name)}
          //     >
          //       Remove from List
          //     </button>
          //   </li>
        ))}
      </div>
    </div>
  );
};

export default MyList;
