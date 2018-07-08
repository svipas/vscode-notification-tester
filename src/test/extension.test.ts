import * as vscode from 'vscode';

suite('Extension Tests', function() {
  test('Notification Messages', async () => {
    try {
      await Promise.all([
        vscode.commands.executeCommand('show.information.message'),
        vscode.commands.executeCommand('show.warning.message'),
        vscode.commands.executeCommand('show.error.message'),
        vscode.commands.executeCommand('show.all.messages')
      ]);
    } catch (error) {
      throw error;
    }
  });

  test('Progress Badge', async () => {
    try {
      await vscode.commands.executeCommand('start.progress.badge');
      await vscode.commands.executeCommand('stop.progress.badge');
    } catch (error) {
      throw error;
    }
  });
});
