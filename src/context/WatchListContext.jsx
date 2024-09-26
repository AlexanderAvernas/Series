/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext, useEffect } from 'react';

// Reducer to handle adding and removing shows
const watchListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      // Check if the show is already in the list before adding
      if (!state.watchList.some((show) => show.id === action.payload.id)) {
        return {
          ...state,
          watchList: [...state.watchList, action.payload],
        };
      }
      return state;

    case 'REMOVE_FROM_LIST':
      return {
        ...state,
        watchList: state.watchList.filter((show) => show.id !== action.payload),
      };

    default:
      return state;
  }
};

// Create context
const WatchListContext = createContext();

// Create a custom hook to use the WatchListContext
// eslint-disable-next-line react-refresh/only-export-components
export const useWatchList = () => {
  return useContext(WatchListContext);
};

// Provider component to wrap the app
export const WatchListProvider = ({ children }) => {
  // Load initial state from localStorage (if available) or fall back to an empty array
  const localStorageWatchList = localStorage.getItem('watchList');
  const initialState = {
    watchList: localStorageWatchList ? JSON.parse(localStorageWatchList) : [],
  };

  const [state, dispatch] = useReducer(watchListReducer, initialState);

  // Save watchList to localStorage when changes
  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
  }, [state.watchList]);

  return (
    <WatchListContext.Provider value={{ watchList: state.watchList, dispatch }}>
      {children}
    </WatchListContext.Provider>
  );
};
