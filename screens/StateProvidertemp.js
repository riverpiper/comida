import { configureStore } from 'redux';
import rootReducer from './reducer';

const store = configureStore(rootReducer);

export default store;
/*

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
*/



