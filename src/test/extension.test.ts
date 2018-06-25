import * as vscode from 'vscode';

suite('Extension Tests', function() {
  test('Notification Messages', async () => {
    await vscode.commands.executeCommand('show.information.message');
    await vscode.commands.executeCommand('show.warning.message');
    await vscode.commands.executeCommand('show.error.message');
    await vscode.commands.executeCommand('show.all.messages');
  });

  test('Progress Badge', async () => {
    await vscode.commands.executeCommand('start.progress.badge');
    await vscode.commands.executeCommand('stop.progress.badge');
  });
});
