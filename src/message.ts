import * as vscode from 'vscode';

export class Message {
  static info() {
    vscode.window.showInformationMessage('Information message.', { title: 'Yes' }, { title: 'No' });
  }

  static warn() {
    vscode.window.showWarningMessage('Warning message.', { title: 'Yes' }, { title: 'No' });
  }

  static error() {
    vscode.window.showErrorMessage('Error message.', { title: 'Yes' }, { title: 'No' });
  }
}
