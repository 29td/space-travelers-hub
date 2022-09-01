import MissionProfile from './missions/missionProfile';
import RocketProfile from './rockets/rocketProfile';

const MyProfile = () => (
  <div className="profile-flex">
    <div>
      <h3>My Rockets</h3>
      <RocketProfile />
    </div>
    <div>
      <h3>My Missions</h3>
      <MissionProfile />
    </div>
  </div>
);
export default MyProfile;
