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
const ora = require("ora");
const path = require("path");
const rxjs_1 = require("rxjs");
const src_1 = require("../../src");
const packageManagers = {
    'npm': {
        quietArgument: '--quiet',
        commands: {
            installAll: 'install',
            installPackage: 'install',
        },
    },
    'cnpm': {
        commands: {
            installAll: 'install',
            installPackage: 'install',
        },
    },
    'yarn': {
        quietArgument: '--silent',
        commands: {
            installPackage: 'add',
        },
    },
    'pnpm': {
        quietArgument: '--silent',
        commands: {
            installAll: 'install',
            installPackage: 'install',
        },
    },
};
class UnknownPackageManagerException extends core_1.BaseException {
    constructor(name) {
        super(`Unknown package manager "${name}".`);
    }
}
exports.UnknownPackageManagerException = UnknownPackageManagerException;
function default_1(factoryOptions = {}) {
    const packageManagerName = factoryOptions.packageManager || 'npm';
    const packageManagerProfile = packageManagers[packageManagerName];
    if (!packageManagerProfile) {
        throw new UnknownPackageManagerException(packageManagerName);
    }
    const rootDirectory = factoryOptions.rootDirectory || process.cwd();
    return (options) => {
        let taskPackageManagerProfile = packageManagerProfile;
        let taskPackageManagerName = packageManagerName;
        if (factoryOptions.allowPackageManagerOverride && options.packageManager) {
            taskPackageManagerProfile = packageManagers[options.packageManager];
            if (!taskPackageManagerProfile) {
                throw new UnknownPackageManagerException(options.packageManager);
            }
            taskPackageManagerName = options.packageManager;
        }
        const bufferedOutput = [];
        const spawnOptions = {
            stdio: !!options.hideOutput ? 'pipe' : 'inherit',
            shell: true,
            cwd: path.join(rootDirectory, options.workingDirectory || ''),
        };
        const args = [];
        if (options.packageName) {
            if (options.command === 'install') {
                args.push(taskPackageManagerProfile.commands.installPackage);
            }
            args.push(options.packageName);
        }
        else if (options.command === 'install' && taskPackageManagerProfile.commands.installAll) {
            args.push(taskPackageManagerProfile.commands.installAll);
        }
        if (options.quiet && taskPackageManagerProfile.quietArgument) {
            args.push(taskPackageManagerProfile.quietArgument);
        }
        if (factoryOptions.registry) {
            args.push(`--registry="${factoryOptions.registry}"`);
        }
        return new rxjs_1.Observable(obs => {
            const spinner = ora({
                text: 'Installing packages...',
                // Workaround for https://github.com/sindresorhus/ora/issues/136.
                discardStdin: process.platform != 'win32',
            }).start();
            const childProcess = child_process_1.spawn(taskPackageManagerName, args, spawnOptions)
                .on('close', (code) => {
                if (code === 0) {
                    spinner.succeed('Packages installed successfully.');
                    spinner.stop();
                    obs.next();
                    obs.complete();
                }
                else {
                    if (options.hideOutput) {
                        bufferedOutput.forEach(({ stream, data }) => stream.write(data));
                    }
                    spinner.fail('Package install failed, see above.');
                    obs.error(new src_1.UnsuccessfulWorkflowExecution());
                }
            });
            if (options.hideOutput) {
                childProcess.stdout.on('data', (data) => bufferedOutput.push({ stream: process.stdout, data: data }));
                childProcess.stderr.on('data', (data) => bufferedOutput.push({ stream: process.stderr, data: data }));
            }
        });
    };
}
exports.default = default_1;
