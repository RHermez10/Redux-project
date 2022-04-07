import {combineReducers} from 'redux';
import { chosenWhiskyReducer } from './chosenWhiskyReducer';
import { whiskyReducer } from './whiskyReducer';

//lägger mina 2 reducers i en function som jag sen skickar till min store.
const reducers = combineReducers({
    allWhiskys: whiskyReducer,
    allChosen: chosenWhiskyReducer
});

export default reducers;