import MissionProfile from './missions/missionProfile';
import RocketProfile from './rockets/rocketProfile';

const MyProfile = () => (
  <div className="profile-flex">
    <div className="profile-1">
      <h3 className="profile-title">My Rockets</h3>
      <RocketProfile />
    </div>
    <div className="profile-2">
      <h3 className="profile-title">My Missions</h3>
      <MissionProfile />
    </div>
  </div>
);
export default MyProfile;
