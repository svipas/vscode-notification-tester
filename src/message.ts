import * as vscode from "vscode";

export function showInfoMessage() {
	vscode.window.showInformationMessage(
		"Information message.",
		{ title: "Yes" },
		{ title: "No" }
	);
}

export function showWarnMessage() {
	vscode.window.showWarningMessage(
		"Warning message.",
		{ title: "Yes" },
		{ title: "No" }
	);
}

export function showErrorMessage() {
	vscode.window.showErrorMessage(
		"Error message.",
		{ title: "Yes" },
		{ title: "No" }
	);
}
