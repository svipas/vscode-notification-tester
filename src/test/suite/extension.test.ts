import * as vscode from 'vscode';

suite('Extension', () => {
  test('Notification messages', async () => {
    await Promise.all([
      vscode.commands.executeCommand('show.information.message'),
      vscode.commands.executeCommand('show.warning.message'),
      vscode.commands.executeCommand('show.error.message'),
      vscode.commands.executeCommand('show.all.messages')
    ]);
  });

  test('Progress badge', async () => {
    await vscode.commands.executeCommand('start.progress.badge');
    await vscode.commands.executeCommand('stop.progress.badge');
  });
});
