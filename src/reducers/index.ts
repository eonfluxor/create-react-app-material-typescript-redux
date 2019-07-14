import { History } from "history";
import { combineReducers } from "redux";
import { Project } from "../model/model";
import * as projectReducer from "./project";

export interface RootState {
	projectList: Project[];
}

export default (history: History) =>
	combineReducers({
		...projectReducer,
	});
