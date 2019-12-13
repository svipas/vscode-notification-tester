import * as vscode from 'vscode';

function showInfo() {
  vscode.window.showInformationMessage('Information message.', { title: 'Yes' }, { title: 'No' });
}

function showWarn() {
  vscode.window.showWarningMessage('Warning message.', { title: 'Yes' }, { title: 'No' });
}

function showError() {
  vscode.window.showErrorMessage('Error message.', { title: 'Yes' }, { title: 'No' });
}

export const message = { showInfo, showWarn, showError };
