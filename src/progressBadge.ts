import * as vscode from 'vscode';

export class ProgressBadge {
  private _resolveFn: (value?: any) => void;

  start() {
    if (this._resolveFn) {
      vscode.window.showWarningMessage('Progress Badge is already visible in Source Control!');
      return;
    }

    vscode.window.withProgress({ location: vscode.ProgressLocation.SourceControl }, () => {
      vscode.window.showInformationMessage('Progress Badge is visible in Source Control.');
      return new Promise((resolve) => (this._resolveFn = resolve));
    });
  }

  stop() {
    if (!this._resolveFn) {
      vscode.window.showWarningMessage('Progress Badge is already stopped!');
      return;
    }

    this._resolveFn();
    this._resolveFn = null;
    vscode.window.showInformationMessage('Progress Badge is stopped.');
  }
}
