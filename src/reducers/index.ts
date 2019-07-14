import { History } from "history";
import { combineReducers } from "redux";
import { Item, ItemsState } from "../model/model";
import * as itemReducer from "./item";

export interface RootState {
	itemsState: ItemsState;
}

export default (history: History) =>
	combineReducers({
		...itemReducer,
	});
