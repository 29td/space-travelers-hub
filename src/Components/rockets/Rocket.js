import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/rockets';

function Rocket(props) {
  const rocket = props;
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const cancel = () => {
    dispatch(cancelReservation(rocket.id));
  };

  return (
    <div className="rocket-card">
      <img className="rocket-pic" src={rocket.flickr_images} alt="Rocket" />
      <div className="rocket-cont">
        <h1 className="rocket-title">{rocket.name}</h1>
        <p className="rocket-description">
          {rocket.reserved && (<span className="reserved">Reserved</span>)}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button type="button" onClick={cancel} className="cancel-btn">
            Cancel Reservation
          </button>
        ) : (
          <button type="button" onClick={reserve} className="reserve-btn">
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

export default Rocket;
