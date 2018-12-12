import {createStore} from 'react-redux';
import {gameReducer} from 'reducers';

export default createStore(gameReducer);