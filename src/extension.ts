import * as vscode from 'vscode';
import { MessageType } from './message-type';
import { startProgressBadge, stopProgressBadge } from './progress-badge';

export function activate(context: vscode.ExtensionContext) {
  const messageTypeKeys = Object.keys(MessageType);
  context.subscriptions.push(
    vscode.commands.registerCommand('show.information.message', () => showMessage(MessageType.Info)),
    vscode.commands.registerCommand('show.warning.message', () => showMessage(MessageType.Warn)),
    vscode.commands.registerCommand('show.error.message', () => showMessage(MessageType.Error)),
    vscode.commands.registerCommand('show.all.messages', () => messageTypeKeys.forEach(showMessage)),
    vscode.commands.registerCommand('start.progress.badge', () => startProgressBadge()),
    vscode.commands.registerCommand('stop.progress.badge', () => stopProgressBadge())
  );
}

function showMessage(type: MessageType) {
  switch (type) {
    case MessageType.Info:
      vscode.window.showInformationMessage('Information message.', { title: 'Yes' }, { title: 'No' });
      break;
    case MessageType.Warn:
      vscode.window.showWarningMessage('Warning message.', { title: 'Yes' }, { title: 'No' });
      break;
    case MessageType.Error:
      vscode.window.showErrorMessage('Error message!', { title: 'Yes' }, { title: 'No' });
      break;
    default:
      throw Error("There's no such message type");
  }
}
