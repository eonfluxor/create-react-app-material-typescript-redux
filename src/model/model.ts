export interface ItemsState {
	items: Item[];
}

export interface Item {
	id: string;
	// type: string;
	labels: string[];
	text: string;
}

export const ActionType = {
	ADD_ITEM: "ADD_ITEM",
	DELETE_ITEM: "DELETE_ITEM",
	LABEL_ITEM: "LABEL_ITEM",
	UNLABEL_ITEM: "UNLABEL_ITEM",
};

export interface Action<T> {
	type: string;
	itemId?: string;
	payload: T;
}

export const LabelTypes = {
	COMPLETED: "completed",
	PARENT: "parent",
};

export const hasLabel = (item: Item, aLabel: string) => {
	const labels = item.labels || [];
	const filtered = labels.filter(label => label === aLabel);
	// console.log({ hasLabel, filtered });
	return filtered.length > 0;
};
