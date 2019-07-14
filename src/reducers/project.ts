import { Action, ActionType, Project } from "../model/model";
import createReducer from "./createReducer";

export const projectList = createReducer<Project[]>([], {
	[ActionType.ADD_PROJECT](state: Project[], action: Action<Project>) {
		return [...state, action.payload];
	},
	[ActionType.COMPLETE_PROJECT](state: Project[], action: Action<number>) {
		// search after project item with the given id and set completed to true
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: true } : t
		);
	},
	[ActionType.UNCOMPLETE_PROJECT](state: Project[], action: Action<number>) {
		// search after project item with the given id and set completed to false
		return state.map(t =>
			t.id === action.payload ? { ...t, completed: false } : t
		);
	},
	[ActionType.DELETE_PROJECT](state: Project[], action: Action<number>) {
		// remove all projects with the given id
		return state.filter(t => t.id !== action.payload);
	},
});
