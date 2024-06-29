import PropTypes from "prop-types";

const MyListCard = ({ spot, handleRemoveFromList }) => {
  const { name, photo, description, zone } = spot;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img className="lg:w-96 md:full rou" src={photo} alt="" />
        </figure>
        <div className="card-body lg:w-1/2 md:full">
          <h2 className="card-title capitalize">{name}</h2>
          <p>{description}</p>
          <p className="font-bold">Zone: {zone}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleRemoveFromList(spot.name)}
              className="btn bg-red-600 text-white"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyListCard.propTypes = {
  spot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    zone: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveFromList: PropTypes.func.isRequired,
};

export default MyListCard;
