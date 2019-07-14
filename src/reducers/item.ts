import { Action, ActionType, Item, ItemsState } from "../model/model";
import createReducer from "./createReducer";

const initialState = {
	items: [],
};

export const itemsState = createReducer<ItemsState>(initialState, {
	[ActionType.ADD_ITEM](state: ItemsState, action: Action<Item>) {
		let items = state.items || [];
		items = [...items, action.payload];
		return { ...state, items };
	},

	[ActionType.LABEL_ITEM](state: ItemsState, action: Action<number>) {
		// search after project item with the given id and set completed to true
		let items = state.items || [];
		items = items.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
		return { ...state, items };
	},

	[ActionType.UNLABEL_ITEM](state: ItemsState, action: Action<number>) {
		// search after project item with the given id and set completed to false
		let items = state.items || [];
		items = items.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
		return { ...state, items };
	},

	[ActionType.DELETE_ITEM](state: ItemsState, action: Action<number>) {
		// remove all projects with the given id

		let items = state.items || [];
		items = items.filter(t => t.id !== action.payload);
		return { ...state, items };
	},
});
