export interface Project {
	id: number;
	text: string;
	completed: boolean;
}

export enum ActionType {
	ADD_PROJECT,
	DELETE_PROJECT,
	COMPLETE_PROJECT,
	UNCOMPLETE_PROJECT,
}

export interface Action<T> {
	type: ActionType;
	payload: T;
}
