// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getPeople = () => dispatch => {
  console.log('fetching people data');
  const fetch = {type: FETCHING};
  dispatch(fetch);
  axios.get('https://swapi.co/api/people/')
  .then(res => {
    console.log('successfully got some people data!');
    const success = {
      type: SUCCESS,
      payload: res.data
    }
    dispatch(success);
  })
  .catch(err => {
    console.log('error in fetching the data :(');
    const failure = {
      type: FAILURE,
      payload: err
    }
    dispatch(failure);
  })
}