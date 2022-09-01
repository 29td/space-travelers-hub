import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../../redux/missions';
import './Missions.css';

const Missions = () => {
  const missionsItems = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsItems.length === 0) {
      dispatch(getMissions());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mission_table">
      <table className="styled-table">
        <thead>
          <tr className="head-row">
            <th className="col1">Mission</th>
            <th className="col2">Description</th>
            <th className="col3">Status</th>
            <th className="col4">Join</th>
          </tr>
        </thead>
        <tbody>
          {missionsItems.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
