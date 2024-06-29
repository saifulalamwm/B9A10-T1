import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotCardBox = ({ spot }) => {
  const { _id, name, photo, description, zone, averageCost, visitor } = spot;
  //   console.log(spot);
  return (
    <div>
      <div className="card glass">
        <figure>
          <Link to={`/updatespots/${_id}`}>
            <img className=" w-full" src={photo} alt="car!" />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold capitalize">{name}</h2>
          <p className="h-20 overflow-hidden">{description}</p>
          <p className="h-6 overflow-hidden">Avg Cost : ${averageCost}</p>
          <p className="h-6 overflow-hidden">Visitor :{visitor}</p>
          <p className="h-6 overflow-hidden">Zone :{zone}</p>
          <div className="card-actions justify-between">
            <Link to={`/spots/${_id}`}>
              <button className="btn bg-cyan-600 text-white">Learn now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SpotCardBox.propTypes = {
  spot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    zone: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    averageCost: PropTypes.string,
    visitor: PropTypes.string,
  }).isRequired,
};

export default SpotCardBox;
