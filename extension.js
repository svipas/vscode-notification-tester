const vscode = require('vscode');

const messages = {
  information: () => vscode.window.showInformationMessage('Information message!', { title: 'Yes' }, { title: 'No' }),
  warning: () => vscode.window.showWarningMessage('Warning message!', { title: 'Yes' }, { title: 'No' }),
  error: () => vscode.window.showErrorMessage('Error message!', { title: 'Yes' }, { title: 'No' })
};

const progressBadge = {
  _resolve: null,
  show() {
    if (this._resolve) {
      vscode.window.showWarningMessage('Progress Badge is already visible in Source Control!');
      return;
    }

    vscode.window.withProgress({ location: vscode.ProgressLocation.SourceControl }, () => {
      vscode.window.showInformationMessage('Progress Badge is visible in Source Control.');
      return new Promise(resolve => (this._resolve = resolve));
    });
  },
  stop() {
    if (!this._resolve) {
      vscode.window.showWarningMessage('Progress Badge is already stopped!');
      return;
    }

    this._resolve();
    this._resolve = null;
    vscode.window.showInformationMessage('Progress Badge is stopped.');
  }
};

function activate(context) {
  // Notification Messages
  const showInformationMessage = vscode.commands.registerCommand('show.information.message', messages.information);
  const showWarningMessage = vscode.commands.registerCommand('show.warning.message', messages.warning);
  const showErrorMessage = vscode.commands.registerCommand('show.error.message', messages.error);
  const showAllMessages = vscode.commands.registerCommand('show.all.messages', () => {
    Object.keys(messages).forEach(key => messages[key]());
  });

  context.subscriptions.push(showInformationMessage);
  context.subscriptions.push(showWarningMessage);
  context.subscriptions.push(showErrorMessage);
  context.subscriptions.push(showAllMessages);

  // Progress Badge
  const showProgressBadgeInSourceControl = vscode.commands.registerCommand('show.progress.badge', progressBadge.show);
  const stopProgressBadgeInSourceControl = vscode.commands.registerCommand('stop.progress.badge', progressBadge.stop);

  context.subscriptions.push(showProgressBadgeInSourceControl);
  context.subscriptions.push(stopProgressBadgeInSourceControl);
}

exports.activate = activate;
