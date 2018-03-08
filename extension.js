const vscode = require('vscode');

const messages = {
  information: () => vscode.window.showInformationMessage('Information message!'),
  warning: () => vscode.window.showWarningMessage('Warning message!'),
  error: () => vscode.window.showErrorMessage('Error message!')
};

function activate(context) {
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
}

exports.activate = activate;
