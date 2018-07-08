import * as vscode from 'vscode';

export default class ProgressBadge {
  private static resolve: any;

  static start() {
    if (this.resolve) {
      vscode.window.showWarningMessage('Progress Badge is already visible in Source Control!');
      return;
    }

    vscode.window.withProgress({ location: vscode.ProgressLocation.SourceControl }, () => {
      vscode.window.showInformationMessage('Progress Badge is visible in Source Control.');
      return new Promise(resolve => (this.resolve = resolve));
    });
  }

  static stop() {
    if (!this.resolve) {
      vscode.window.showWarningMessage('Progress Badge is already stopped!');
      return;
    }

    this.resolve();
    this.resolve = null;
    vscode.window.showInformationMessage('Progress Badge is stopped.');
  }
}
