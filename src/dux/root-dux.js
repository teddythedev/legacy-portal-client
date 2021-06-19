import { combineReducers } from "redux";
import * as roster from './roster-dux';

const rootDux = combineReducers({
    [roster.mountPoint]: roster.reducer
});

export default rootDux;