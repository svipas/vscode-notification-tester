## [Unreleased]

## 2.5.1 (July 7, 2020)

- Update all dependencies.
- Change project file names convention.

## 2.5.0 (June 25, 2020)

- Update all dependencies.
- Bundle extension with webpack for faster startup.

## 2.4.9 (May 17, 2020)

- Reformat project with new settings.
- Update all dependencies.
- Update images.

## 2.4.8 (April 29, 2020)

- Add `vscode:publish` script and re-publish package using Yarn instead of npm.

## 2.4.7 (April 29, 2020)

- Change indentation to tabs.
- Update all dependencies.
- Change filename convention to use kebab-case.

## 2.4.6 (March 8, 2020)

- Change filename convention to use camelCase.

## 2.4.5 (March 8, 2020)

- Update all dependencies.
- Refactor extension.

## 2.4.4 (February 25, 2020)

- Remove ESLint.
- Update all dependencies including TypeScript to 3.8

## 2.4.3 (February 13, 2020)

- Update all dependencies.
- Refactor extension.

## 2.4.2 (January 17, 2020)

- Update all dependencies.
- Properly return `exitCode` after tests.

## 2.4.1 (December 18, 2019)

- Update all dependencies.
- Publish extension with `--yarn` flag in `vsce` command.

## 2.4.0 (December 13, 2019)

- Update all dependencies.
- Set `target` in `tsconfig.json` to `ES2017` instead of `es6` and remove `lib` key.
- Refactor extension logic to make it easier to maintain and to reduce some boilerplate.

## 2.3.1 (December 9, 2019)

- Update all dependencies.

## 2.3.0 (December 4, 2019)

- Update all dependencies.
- Update images and `README`.
- Create `errors.ts` which contains all extension errors.
- Set main file name to `main.ts` instead of `extension.ts`.
- Create `ExtensionCommand` which contains all extension commands.
- Move `showMessage()` to `message-type.ts`.

## 2.2.1 (December 2, 2019)

- Set `extensionKind` to `["ui"]` in `package.json`.

## 2.2.0 (December 2, 2019)

- Update `LICENSE` year.
- Update all dependencies.
- Increase minimum VS Code version to `1.30.0`.
- Set `extensionKind` to `["ui", "workspace"]` in `package.json`.
- Minor refactoring of extension.

## 2.1.6 (November 15, 2019)

- Update all dependencies.

## 2.1.5 (October 24, 2019)

- Update `azure-pipelines.yml` to use Node 12 and fix triggers.

## 2.1.4 (October 24, 2019)

- Update dependencies.
- Set `extensionKind` to `ui` in `package.json`.
- Move `images/icon.png` to root dir.
- Add `images` dir to `.vscodeignore`.

## 2.1.3 (August 11, 2019)

- Update all dependencies.
- Add `azure-pipelines.yml` to `.vscodeignore`.
- Update image of how extension looks like.
- Update `README.md`.

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
