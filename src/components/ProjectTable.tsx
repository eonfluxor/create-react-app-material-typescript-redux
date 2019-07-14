// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as ItemActions from "../actions/items";
import { Item } from "../model/model";
import { RootState } from "../reducers";

interface Props {}

const ProjectTable = (props: Props) => {
	const classes = useStyles();
	const itemsState = useSelector((state: RootState) => state.itemsState);
	const itemActions = useActions(ItemActions);

	const onRowClick = (project: Item) => {
		if (project.completed) {
			itemActions.unlabelItem(project.id);
		} else {
			itemActions.labelItem(project.id);
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
					{itemsState.items.map((n: Item) => {
						return (
							<TableRow
								key={n.id}
								hover
								onClick={event => onRowClick(n)}
							>
								<TableCell padding="none">
									<Checkbox checked={n.completed} />
								</TableCell>
								<TableCell padding="none">{n.text}</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() =>
											itemActions.deleteItem(n.id)
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
