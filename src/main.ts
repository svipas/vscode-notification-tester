import * as vscode from 'vscode';
import { ExtensionCommand } from './extension-command';
import { Message } from './message';
import { ProgressBadge } from './progress-badge';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(ExtensionCommand.SHOW_INFORMATION_MESSAGE, () => Message.info()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_WARNING_MESSAGE, () => Message.warn()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ERROR_MESSAGE, () => Message.error()),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ALL_MESSAGES, () => {
      Message.info();
      Message.warn();
      Message.error();
    }),
    vscode.commands.registerCommand(ExtensionCommand.START_PROGRESS_BADGE, () => ProgressBadge.start()),
    vscode.commands.registerCommand(ExtensionCommand.STOP_PROGRESS_BADGE, () => ProgressBadge.stop())
  );
}

export function deactivate() {}
