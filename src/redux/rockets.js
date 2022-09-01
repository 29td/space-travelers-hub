import axios from 'axios';

const ROCKETS_API = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const RESERVED = 'RESERVED';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const initialState = [];

export const reserveRocket = (id) => ({
  type: RESERVED,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const rocketsAction = (data) => {
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return {
    type: GET_ROCKETS,
    payload: rockets,
  };
};

export const getRockets = () => async (dispatch) => {
  await axios({
    method: 'get',
    url: ROCKETS_API,
    responseType: 'json',
  }).then((res) => {
    dispatch(rocketsAction(res.data));
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    case RESERVED:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
