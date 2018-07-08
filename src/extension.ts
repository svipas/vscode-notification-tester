import * as vscode from 'vscode';
import MessageType from './MessageType';
import ProgressBadge from './ProgressBadge';

const YES = Object.freeze({ title: 'Yes' });
const NO = Object.freeze({ title: 'No' });

function showMessage(type: MessageType) {
  switch (type) {
    case MessageType.INFO:
      vscode.window.showInformationMessage('Information message!', YES, NO);
      break;
    case MessageType.WARN:
      vscode.window.showWarningMessage('Warning message!', YES, NO);
      break;
    case MessageType.ERROR:
      vscode.window.showErrorMessage('Error message!', YES, NO);
      break;
    default:
      throw new Error("There's no such message type");
  }
}

export function activate(context: vscode.ExtensionContext) {
  // Notification Messages
  const messages: Array<vscode.Disposable> = [
    vscode.commands.registerCommand('show.information.message', () => showMessage(MessageType.INFO)),
    vscode.commands.registerCommand('show.warning.message', () => showMessage(MessageType.WARN)),
    vscode.commands.registerCommand('show.error.message', () => showMessage(MessageType.ERROR)),
    vscode.commands.registerCommand('show.all.messages', () => {
      Object.values(MessageType).forEach(val => {
        if (typeof val === 'number') {
          showMessage(val);
        }
      });
    })
  ];

  messages.forEach(msg => context.subscriptions.push(msg));

  // Progress Badge
  const progressBadge: Array<vscode.Disposable> = [
    vscode.commands.registerCommand('start.progress.badge', () => ProgressBadge.start()),
    vscode.commands.registerCommand('stop.progress.badge', () => ProgressBadge.stop())
  ];

  progressBadge.forEach(pb => context.subscriptions.push(pb));
}
