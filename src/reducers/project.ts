import { Action, ActionType, Item } from "../model/model";
import createReducer from "./createReducer";

export const projectList = createReducer<Item[]>([], {
	[ActionType.ADD_ITEM](state: Item[], action: Action<Item>) {
		return [...state, action.payload];
	},
	[ActionType.LABEL_ITEM](state: Item[], action: Action<number>) {
		// search after project item with the given id and set completed to true
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
	},
	[ActionType.UNLABEL_ITEM](state: Item[], action: Action<number>) {
		// search after project item with the given id and set completed to false
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
	},
	[ActionType.DELETE_ITEM](state: Item[], action: Action<number>) {
		// remove all projects with the given id
		return state.filter(t => t.id !== action.payload);
	},
});
