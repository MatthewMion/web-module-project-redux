import { ADD_FAVORITE } from "../actions/movieActions";
import movies from "../data";
const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default favoriteReducer;
