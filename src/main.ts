import * as vscode from 'vscode';
import { ExtensionCommand } from './extension-command';
import { message } from './message';
import { progressBadge } from './progress-badge';

export function activate(context: vscode.ExtensionContext) {
  const messageKeys = Object.keys(message);

  context.subscriptions.push(
    vscode.commands.registerCommand(ExtensionCommand.SHOW_INFORMATION_MESSAGE, () => message.showInfo()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_WARNING_MESSAGE, () => message.showWarn()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ERROR_MESSAGE, () => message.showError()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ALL_MESSAGES, () => {
      messageKeys.forEach(key => message[key]());
    }),
    vscode.commands.registerCommand(ExtensionCommand.START_PROGRESS_BADGE, () => progressBadge.start()),
    vscode.commands.registerCommand(ExtensionCommand.STOP_PROGRESS_BADGE, () => progressBadge.stop())
  );
}

export function deactivate() {}
