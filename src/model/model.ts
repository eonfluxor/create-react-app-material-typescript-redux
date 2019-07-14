export interface Item {
	id: number;
	text: string;
	completed: boolean;
}

export enum ActionType {
	ADD_ITEM,
	DELETE_ITEM,
	LABEL_ITEM,
	UNLABEL_ITEM,
}

export interface Action<T> {
	type: ActionType;
	payload: T;
}
