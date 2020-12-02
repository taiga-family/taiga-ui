"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const child_process_1 = require("child_process");
const path = require("path");
function default_1(factoryOptions = {}) {
    const rootDirectory = factoryOptions.rootDirectory || process.cwd();
    return async (options, context) => {
        const authorName = options.authorName;
        const authorEmail = options.authorEmail;
        const execute = (args, ignoreErrorStream) => {
            const outputStream = 'ignore';
            const errorStream = ignoreErrorStream ? 'ignore' : process.stderr;
            const spawnOptions = {
                stdio: [process.stdin, outputStream, errorStream],
                shell: true,
                cwd: path.join(rootDirectory, options.workingDirectory || ''),
                env: {
                    ...process.env,
                    ...(authorName
                        ? { GIT_AUTHOR_NAME: authorName, GIT_COMMITTER_NAME: authorName }
                        : {}),
                    ...(authorEmail
                        ? { GIT_AUTHOR_EMAIL: authorEmail, GIT_COMMITTER_EMAIL: authorEmail }
                        : {}),
                },
            };
            return new Promise((resolve, reject) => {
                child_process_1.spawn('git', args, spawnOptions)
                    .on('close', (code) => {
                    if (code === 0) {
                        resolve();
                    }
                    else {
                        reject(code);
                    }
                });
            });
        };
        const hasCommand = await execute(['--version'])
            .then(() => true, () => false);
        if (!hasCommand) {
            return;
        }
        const insideRepo = await execute(['rev-parse', '--is-inside-work-tree'], true)
            .then(() => true, () => false);
        if (insideRepo) {
            context.logger.info(core_1.tags.oneLine `
        Directory is already under version control.
        Skipping initialization of git.
      `);
            return;
        }
        // if git is not found or an error was thrown during the `git`
        // init process just swallow any errors here
        // NOTE: This will be removed once task error handling is implemented
        try {
            await execute(['init']);
            await execute(['add', '.']);
            if (options.commit) {
                const message = options.message || 'initial commit';
                await execute(['commit', `-m "${message}"`]);
            }
            context.logger.info('Successfully initialized git.');
        }
        catch (_a) { }
    };
}
exports.default = default_1;
