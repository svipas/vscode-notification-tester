import * as vscode from 'vscode';
import { MESSAGE_TYPE_INVALID_ERROR } from './errors';

export enum MessageType {
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error'
}

export function showMessage(type: MessageType) {
  switch (type) {
    case MessageType.Info:
      vscode.window.showInformationMessage('Information message.', { title: 'Yes' }, { title: 'No' });
      break;
    case MessageType.Warn:
      vscode.window.showWarningMessage('Warning message.', { title: 'Yes' }, { title: 'No' });
      break;
    case MessageType.Error:
      vscode.window.showErrorMessage('Error message.', { title: 'Yes' }, { title: 'No' });
      break;
    default:
      throw MESSAGE_TYPE_INVALID_ERROR;
  }
}
