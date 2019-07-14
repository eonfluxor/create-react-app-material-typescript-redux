import { Action, ActionType, Project } from "../model/model";

export function addProject(project: Project): Action<Project> {
	return {
		type: ActionType.ADD_PROJECT,
		payload: project,
	};
}

// Async Function expample with redux-thunk
export function completeProject(projectId: number) {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({ type: ActionType.COMPLETE_PROJECT, payload: projectId });
	};
}

export function uncompleteProject(projectId: number): Action<number> {
	return {
		type: ActionType.UNCOMPLETE_PROJECT,
		payload: projectId,
	};
}

export function deleteProject(projectId: number): Action<number> {
	return {
		type: ActionType.DELETE_PROJECT,
		payload: projectId,
	};
}
