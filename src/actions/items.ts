import { Action, ActionType, Item } from "../model/model";

export const addItem = (item: Item): Action<Item> => {
	return {
		type: ActionType.ADD_ITEM,
		payload: item,
	};
};

// Async Function expample with redux-thunk
export const labelItem = (itemId: string, label: string) => {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({
			type: ActionType.LABEL_ITEM,
			itemId: itemId,
			payload: label,
		});
	};
};

export const unlabelItem = (itemId: string, label: string): Action<string> => {
	return {
		type: ActionType.UNLABEL_ITEM,
		itemId: itemId,
		payload: label,
	};
};

export const deleteItem = (itemId: string): Action<any> => {
	return {
		type: ActionType.DELETE_ITEM,
		itemId: itemId,
		payload: undefined,
	};
};
