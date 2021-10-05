import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => !item),
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
