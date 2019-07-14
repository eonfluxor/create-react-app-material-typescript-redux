import { Action, ActionType, Item, ItemsState } from "../model/model";
import _ from "underscore";
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

	[ActionType.LABEL_ITEM](state: ItemsState, action: Action<string>) {
		// search after project item with the given id and set completed to true
		let items = state.items || [];

		console.log({ items, action });

		items = items.map(item => {
			console.log({ id: item.id, actionId: action.itemId });

			if (item.id === action.itemId) {
				console.log("matched!");

				console.log({ labels: item.labels });
				item.labels = _.union(item.labels, [action.payload]);
			}
			return item;
		});
		return { ...state, items };
	},

	[ActionType.UNLABEL_ITEM](state: ItemsState, action: Action<string>) {
		// search after project item with the given id and set completed to false
		let items = state.items || [];

		console.log({ items, action });

		items = items.map(item => {
			if (item.id === action.itemId) {
				item.labels = _.difference(item.labels, [action.payload]);
			}
			return item;
		});
		return { ...state, items };
	},

	[ActionType.DELETE_ITEM](state: ItemsState, action: Action<string>) {
		// remove all projects with the given id

		let items = state.items || [];

		items = items.filter(item => item.id !== action.itemId);
		return { ...state, items };
	},
});
