import * as vscode from 'vscode';

let resolveFn: () => void;

export function startProgressBadge() {
  if (resolveFn) {
    vscode.window.showWarningMessage('Progress Badge is already visible in Source Control!');
    return;
  }

  vscode.window.withProgress({ location: vscode.ProgressLocation.SourceControl }, () => {
    vscode.window.showInformationMessage('Progress Badge is visible in Source Control.');
    return new Promise(resolve => (resolveFn = resolve));
  });
}

export function stopProgressBadge() {
  if (!resolveFn) {
    vscode.window.showWarningMessage('Progress Badge is already stopped!');
    return;
  }

  resolveFn();
  resolveFn = undefined;
  vscode.window.showInformationMessage('Progress Badge is stopped.');
}
