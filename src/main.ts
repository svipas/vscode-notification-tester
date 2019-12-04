import * as vscode from 'vscode';
import { ExtensionCommand } from './extension-command';
import { MessageType, showMessage } from './message-type';
import { startProgressBadge, stopProgressBadge } from './progress-badge';

export function activate(context: vscode.ExtensionContext) {
  const messageTypeKeys = Object.keys(MessageType);
  context.subscriptions.push(
    vscode.commands.registerCommand(ExtensionCommand.SHOW_INFORMATION_MESSAGE, () => showMessage(MessageType.Info)),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_WARNING_MESSAGE, () => showMessage(MessageType.Warn)),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ERROR_MESSAGE, () => showMessage(MessageType.Error)),
    vscode.commands.registerCommand(ExtensionCommand.SHOW_ALL_MESSAGES, () => {
      messageTypeKeys.forEach((msgType: MessageType) => showMessage(msgType));
    }),
    vscode.commands.registerCommand(ExtensionCommand.START_PROGRESS_BADGE, () => startProgressBadge()),
    vscode.commands.registerCommand(ExtensionCommand.STOP_PROGRESS_BADGE, () => stopProgressBadge())
  );
}

export function deactivate() {}
