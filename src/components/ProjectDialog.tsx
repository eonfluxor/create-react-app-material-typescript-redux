// prettier-ignore
import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useActions } from "../actions";
import * as ProjectActions from "../actions/project";

interface Props {
	open: boolean;
	onClose: () => void;
}

function ProjectDialog(props: Props) {
	const { open, onClose } = props;
	const classes = useStyles();
	const [newProjectText, setNewProjectText] = React.useState("");
	const projectActions = useActions(ProjectActions);

	const handleClose = () => {
		projectActions.addProject({
			id: Math.random(),
			completed: false,
			text: newProjectText,
		});
		onClose();

		// reset project text if user reopens the dialog
		setNewProjectText("");
	};

	const handleChange = (event: any) => {
		setNewProjectText(event.target.value);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a new PROJECT</DialogTitle>
			<TextField
				id="multiline-flexible"
				multiline
				value={newProjectText}
				onChange={handleChange}
				className={classes.textField}
			/>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
});

export default ProjectDialog;
