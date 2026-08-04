import React from "react";
import Button from "../button/button";
import {
	downloadTutorialMarkdown,
	printTutorial,
} from "./tutorialExport";
import "./tutorialExportActions.scss";

const TutorialExportActions = ({ tutorial }) => {
	if (!tutorial) {
		return null;
	}

	return (
		<div className='tutorial-export-actions no-print'>
			<Button
				label='Imprimer'
				className='tutorial-export-actions__print'
				onClick={printTutorial}
			/>
			<Button
				label='Exporter'
				className='tutorial-export-actions__export'
				onClick={() => downloadTutorialMarkdown(tutorial)}
			/>
		</div>
	);
};

export default TutorialExportActions;
