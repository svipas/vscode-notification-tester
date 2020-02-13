import * as vscode from 'vscode';

export class ProgressBadge {
  private static resolveFn?: () => void;

  static start() {
    if (this.resolveFn) {
      vscode.window.showWarningMessage('Progress Badge is already visible in Source Control!');
      return;
    }

    vscode.window.withProgress({ location: vscode.ProgressLocation.SourceControl }, () => {
      vscode.window.showInformationMessage('Progress Badge is visible in Source Control.');
      return new Promise(resolve => (this.resolveFn = resolve));
    });
  }

  static stop() {
    if (!this.resolveFn) {
      vscode.window.showWarningMessage('Progress Badge is already stopped!');
      return;
    }

    this.resolveFn();
    this.resolveFn = undefined;
    vscode.window.showInformationMessage('Progress Badge is stopped.');
  }
}
