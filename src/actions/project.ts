import { Action, ActionType, Project } from "../model/model";

export const addItem = (project: Project): Action<Project> => {
	return {
		type: ActionType.ADD_ITEM,
		payload: project,
	};
};

// Async Function expample with redux-thunk
export const labelItem = (projectId: number) => {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({ type: ActionType.LABEL_ITEM, payload: projectId });
	};
};

export const unlabelItem = (projectId: number): Action<number> => {
	return {
		type: ActionType.UNLABEL_ITEM,
		payload: projectId,
	};
};

export const deleteItem = (projectId: number): Action<number> => {
	return {
		type: ActionType.DELETE_ITEM,
		payload: projectId,
	};
};
