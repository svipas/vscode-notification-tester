import * as vscode from 'vscode';

let resolveFn: () => void;

function start() {
  if (resolveFn) {
    vscode.window.showWarningMessage('Progress Badge is already visible in Source Control!');
    return;
  }

  vscode.window.withProgress({ location: vscode.ProgressLocation.SourceControl }, () => {
    vscode.window.showInformationMessage('Progress Badge is visible in Source Control.');
    return new Promise(resolve => (resolveFn = resolve));
  });
}

function stop() {
  if (!resolveFn) {
    vscode.window.showWarningMessage('Progress Badge is already stopped!');
    return;
  }

  resolveFn();
  resolveFn = undefined;
  vscode.window.showInformationMessage('Progress Badge is stopped.');
}

export const progressBadge = { start, stop };
