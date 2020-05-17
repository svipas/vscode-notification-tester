import * as vscode from "vscode";

let progressBadgeStartResolveFn: (() => void) | undefined;

export function startProgressBadge() {
	if (progressBadgeStartResolveFn) {
		vscode.window.showWarningMessage(
			"Progress Badge is already visible in Source Control!"
		);
		return;
	}

	vscode.window.withProgress(
		{ location: vscode.ProgressLocation.SourceControl },
		() => {
			vscode.window.showInformationMessage(
				"Progress Badge is visible in Source Control."
			);
			return new Promise((resolve) => (progressBadgeStartResolveFn = resolve));
		}
	);
}

export function stopProgressBadge() {
	if (!progressBadgeStartResolveFn) {
		vscode.window.showWarningMessage("Progress Badge is already stopped!");
		return;
	}

	progressBadgeStartResolveFn();
	progressBadgeStartResolveFn = undefined;
	vscode.window.showInformationMessage("Progress Badge is stopped.");
}
