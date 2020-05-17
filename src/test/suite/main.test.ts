import * as vscode from "vscode";
import { ExtensionCommand } from "../../ExtensionCommand";

suite("Notification Center", () => {
	test("All notification messages", async () => {
		await Promise.all([
			vscode.commands.executeCommand(ExtensionCommand.SHOW_INFORMATION_MESSAGE),
			vscode.commands.executeCommand(ExtensionCommand.SHOW_WARNING_MESSAGE),
			vscode.commands.executeCommand(ExtensionCommand.SHOW_ERROR_MESSAGE),
			vscode.commands.executeCommand(ExtensionCommand.SHOW_ALL_MESSAGES),
		]);
	});

	test("Progress badge", async () => {
		await vscode.commands.executeCommand(ExtensionCommand.START_PROGRESS_BADGE);
		await vscode.commands.executeCommand(ExtensionCommand.STOP_PROGRESS_BADGE);
	});
});
