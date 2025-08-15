# Contributing

> Thank you for considering contributing to our project. Your help is very much appreciated!

When contributing, it's better to first discuss the change you wish to make via issue or discussion, or any other method
with the owners of this repository before making a change.

All members of our community are expected to follow our
[Code of Conduct](https://github.com/taiga-family/.github/blob/main/CODE_OF_CONDUCT.md). Please make sure you are
welcoming and friendly in all of our spaces.

## Getting started

In order to make your contribution please make a fork of the repository. After you've pulled the code, follow these
steps to kick-start the development:

1. Run `npm ci` to install dependencies
2. Run `npm start` to launch demo project

## Testing

Make sure your changes pass current tests and also write new tests for the new behavior:

- `npm test` to run unit tests
- `npm run test:e2e` to run screenshot tests

## Dead Code Analysis

To find unused files, dependencies, and exports, use knip:

- `npm run knip` to find unused files and dependencies (production focus)
- `npm run knip:all` to run comprehensive analysis including all types of issues
- `npm run knip:fix` to automatically fix some issues (use with caution)

Knip helps maintain a clean codebase by identifying:
- **Unused files**: Files that are never imported
- **Unused dependencies**: Dependencies listed in package.json but never used
- **Unlisted dependencies**: Dependencies used in code but not declared in package.json
- **Unused exports**: Exports that are never imported elsewhere

The configuration excludes demo projects and test files to focus on library code.

## Pull Request Process

1. We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) in our commit messages, i.e.
   `feat(core): improve typing`
2. Make sure you cover all code changes with unit tests
3. When you are ready, create Pull Request of your fork into original repository
