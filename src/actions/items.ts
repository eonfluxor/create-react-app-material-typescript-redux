import { Action, ActionType, Item } from "../model/model";

export const addItem = (item: Item): Action<Item> => {
	return {
		type: ActionType.ADD_ITEM,
		payload: item,
	};
};

// Async Function expample with redux-thunk
export const labelItem = (itemId: number) => {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({ type: ActionType.LABEL_ITEM, payload: itemId });
	};
};

export const unlabelItem = (itemId: number): Action<number> => {
	return {
		type: ActionType.UNLABEL_ITEM,
		payload: itemId,
	};
};

export const deleteItem = (itemId: number): Action<number> => {
	return {
		type: ActionType.DELETE_ITEM,
		payload: itemId,
	};
};
