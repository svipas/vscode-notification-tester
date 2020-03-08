import * as vscode from 'vscode';
import { ExtensionCommand } from './extensionCommand';
import { showErrorMessage, showInfoMessage, showWarnMessage } from './message';
import { startProgressBadge, stopProgressBadge } from './progressBadge';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(ExtensionCommand.SHOW_INFORMATION_MESSAGE, () => showInfoMessage()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_WARNING_MESSAGE, () => showWarnMessage()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ERROR_MESSAGE, () => showErrorMessage()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ALL_MESSAGES, () => {
      showInfoMessage();
      showWarnMessage();
      showErrorMessage();
    }),
    vscode.commands.registerCommand(ExtensionCommand.START_PROGRESS_BADGE, () => startProgressBadge()),
    vscode.commands.registerCommand(ExtensionCommand.STOP_PROGRESS_BADGE, () => stopProgressBadge())
  );
}

export function deactivate() {}
