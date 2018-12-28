import * as vscode from 'vscode';
import { MessageType } from './messageType';
import { ProgressBadge } from './progressBadge';

export function activate(context: vscode.ExtensionContext) {
  const progressBadge = new ProgressBadge();
  const messageTypeKeys = Object.keys(MessageType);

  const commands = [
    vscode.commands.registerCommand('show.information.message', () => showMessage(MessageType.Info)),
    vscode.commands.registerCommand('show.warning.message', () => showMessage(MessageType.Warn)),
    vscode.commands.registerCommand('show.error.message', () => showMessage(MessageType.Error)),
    vscode.commands.registerCommand('show.all.messages', () => messageTypeKeys.forEach(showMessage)),
    vscode.commands.registerCommand('start.progress.badge', () => progressBadge.start()),
    vscode.commands.registerCommand('stop.progress.badge', () => progressBadge.stop())
  ];

  context.subscriptions.push(...commands);
}

function showMessage(type: MessageType) {
  switch (type) {
    case MessageType.Info:
      vscode.window.showInformationMessage('Information message!', title.yes, title.no);
      break;
    case MessageType.Warn:
      vscode.window.showWarningMessage('Warning message!', title.yes, title.no);
      break;
    case MessageType.Error:
      vscode.window.showErrorMessage('Error message!', title.yes, title.no);
      break;
    default:
      throw Error("there's no such message type");
  }
}

const title = {
  yes: { title: 'Yes' },
  no: { title: 'No' }
};
