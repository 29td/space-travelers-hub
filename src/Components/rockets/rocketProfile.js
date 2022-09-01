import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketProfile = useSelector((state) => state.rockets);
  const reservedRockets = rocketProfile.filter((rocket) => rocket.reserved);
  const displayRockets = reservedRockets.map((rocket) => (
    <tr key={rocket.id}>
      <td>
        <p className="profile-item">{rocket.name}</p>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="styled-table">
        <tbody>{displayRockets}</tbody>
      </table>
    </div>
  );
};

export default RocketProfile;
