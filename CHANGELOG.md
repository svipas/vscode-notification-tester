## [Unreleased]

- Update all dependencies.

## 2.1.2 (July 11, 2019)

- Update all dependencies.

## 2.1.1 (June 22, 2019)

- Change filename convention to use hyphen.
- Update all dependencies.
- Add `plugin:@typescript-eslint/eslint-recommended` to ESLint `extends`.

## 2.1.0 (June 16, 2019)

- Replace TSLint to ESLint and add `lint` script.
- Remove Prettier config.
- Update all dependencies.
- Remove `vscode` dependency and add `@types/vscode`, `vscode-test`, `mocha`, `@types/glob` and `glob`, this is a new approach for extension usage and testing [#70175](https://github.com/microsoft/vscode/issues/70175).
- Replace Travis to Azure Pipelines.
- Add `concurrent-run` dependency to run `eslint` and `tsc` concurrently at the same time.
- Refactor `CHANGELOG` and `README` to a new format.

## 2.0.4 (December 28, 2018)

- Add Prettier config.
- Update license year.
- Add `max-line-length` rule to the TSLint.
- Some minor changes in `extension.ts`.
- Update all dependencies.

## 2.0.3 (December 16, 2018)

- Update all dependencies.

## 2.0.2 (October 28, 2018)

- Update all dependencies.
- Refactor some code.

## 2.0.1 (July 8, 2018)

- Change file name of `enum` and `class` to uppercase.
- Update all dependencies.
- Use `Promise.all` for one of the tests to improve performance.

## 2.0.0 (June 25, 2018)

- Add TravisCI with tests.
- Rewrite to the TypeScript.

## 1.2.1 (May 5, 2018)

- Add icon in `README`.
- Add Visual Studio Marketplace badge in `README`.
- Rename `images/notification.png` to `images/icon.png`.
- Change size and location of Notification Center image.
- Update `vscode` dependency.

## 1.2.0 (April 2, 2018)

- Add `Show Progress Badge` and `Stop Progress Badge` commands to show/stop Progress Badge in Source Control [#2](https://github.com/svipas/vscode-notification-tester/issues/2).
- Add link to the extension in `README`.
- Change Notification Center image.

## 1.1.0 (March 9, 2018)

- Add dummy Yes and No buttons for all messages [#1](https://github.com/svipas/vscode-notification-tester/issues/1).
- Update Notification Center image.
- Create `yarn.lock` file and add `vscode` dependency in `package.json` to enable autocomplete while developing extension.

## 1.0.0 (March 8, 2018)

- Initial release.
