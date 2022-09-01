import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missionProfile = useSelector((state) => state.missions);
  const reservedMissions = missionProfile.filter((mission) => mission.isJoined);
  const displayMissions = reservedMissions.map((mission) => (
    <li key={mission.mission_id}>{mission.mission_name}</li>
  ));

  return (
    <div>
      <ul className="profile-item">{displayMissions}</ul>
    </div>
  );
};

export default MissionProfile;
