import { History } from "history";
import { combineReducers } from "redux";
import { Item } from "../model/model";
import * as projectReducer from "./project";

export interface RootState {
	projectList: Item[];
}

export default (history: History) =>
	combineReducers({
		...projectReducer,
	});
