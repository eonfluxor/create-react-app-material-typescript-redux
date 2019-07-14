// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as ItemActions from "../actions/items";
import { Item, hasLabel, LabelTypes } from "../model/model";
import { RootState } from "../reducers";

interface Props {}

const ProjectTable = (props: Props) => {
	const classes = useStyles();
	const itemsState = useSelector((state: RootState) => state.itemsState);
	const itemActions = useActions(ItemActions);

	const onRowClick = (project: Item) => {
		const completed = hasLabel(project, LabelTypes.COMPLETED);
		if (completed) {
			itemActions.unlabelItem(project.id, LabelTypes.COMPLETED);
		} else {
			itemActions.labelItem(project.id, LabelTypes.COMPLETED);
		}
	};

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="default">Completed</TableCell>
						<TableCell padding="default">Text</TableCell>
						<TableCell padding="default">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{itemsState.items.map((project: Item) => {
						const completed = hasLabel(
							project,
							LabelTypes.COMPLETED
						);
						return (
							<TableRow
								key={project.id}
								hover
								onClick={event => onRowClick(project)}
							>
								<TableCell padding="none">
									<Checkbox checked={completed} />
								</TableCell>
								<TableCell padding="none">
									{project.text}
								</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() =>
											itemActions.deleteItem(project.id)
										}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
};

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});

export default ProjectTable;
