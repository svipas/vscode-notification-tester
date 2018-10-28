import * as vscode from 'vscode';

suite('Extension Tests', function() {
  test('Notification Messages', async () => {
    await Promise.all([
      vscode.commands.executeCommand('show.information.message'),
      vscode.commands.executeCommand('show.warning.message'),
      vscode.commands.executeCommand('show.error.message'),
      vscode.commands.executeCommand('show.all.messages')
    ]);
  });

  test('Progress Badge', async () => {
    await vscode.commands.executeCommand('start.progress.badge');
    await vscode.commands.executeCommand('stop.progress.badge');
  });
});
