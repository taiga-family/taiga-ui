"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const os_1 = require("os");
const path_1 = require("path");
const rimraf = require("rimraf");
const schema_1 = require("../lib/config/schema");
const color_1 = require("../utilities/color");
function installPackage(packageName, logger, packageManager = schema_1.PackageManager.Npm, save = true, extraArgs = [], cwd = process.cwd()) {
    const packageManagerArgs = getPackageManagerArguments(packageManager);
    const installArgs = [
        packageManagerArgs.install,
        packageName,
        packageManagerArgs.silent,
    ];
    logger.info(color_1.colors.green(`Installing packages for tooling via ${packageManager}.`));
    if (save === 'devDependencies') {
        installArgs.push(packageManagerArgs.saveDev);
    }
    const { status, stderr, stdout, error } = child_process_1.spawnSync(packageManager, [...installArgs, ...extraArgs], {
        stdio: 'pipe',
        shell: true,
        encoding: 'utf8',
        cwd,
    });
    if (status !== 0) {
        let errorMessage = ((error && error.message) || stderr || stdout || '').trim();
        if (errorMessage) {
            errorMessage += '\n';
        }
        throw new Error(errorMessage + `Package install failed${errorMessage ? ', see above' : ''}.`);
    }
    logger.info(color_1.colors.green(`Installed packages for tooling via ${packageManager}.`));
}
exports.installPackage = installPackage;
function installTempPackage(packageName, logger, packageManager = schema_1.PackageManager.Npm, extraArgs) {
    const tempPath = fs_1.mkdtempSync(path_1.join(fs_1.realpathSync(os_1.tmpdir()), 'angular-cli-packages-'));
    // clean up temp directory on process exit
    process.on('exit', () => {
        try {
            rimraf.sync(tempPath);
        }
        catch (_a) { }
    });
    // NPM will warn when a `package.json` is not found in the install directory
    // Example:
    // npm WARN enoent ENOENT: no such file or directory, open '/tmp/.ng-temp-packages-84Qi7y/package.json'
    // npm WARN .ng-temp-packages-84Qi7y No description
    // npm WARN .ng-temp-packages-84Qi7y No repository field.
    // npm WARN .ng-temp-packages-84Qi7y No license field.
    // While we can use `npm init -y` we will end up needing to update the 'package.json' anyways
    // because of missing fields.
    fs_1.writeFileSync(path_1.join(tempPath, 'package.json'), JSON.stringify({
        name: 'temp-cli-install',
        description: 'temp-cli-install',
        repository: 'temp-cli-install',
        license: 'MIT',
    }));
    // setup prefix/global modules path
    const packageManagerArgs = getPackageManagerArguments(packageManager);
    const tempNodeModules = path_1.join(tempPath, 'node_modules');
    // Yarn will not append 'node_modules' to the path
    const prefixPath = packageManager === schema_1.PackageManager.Yarn ? tempNodeModules : tempPath;
    const installArgs = [
        ...(extraArgs || []),
        `${packageManagerArgs.prefix}="${prefixPath}"`,
        packageManagerArgs.noLockfile,
    ];
    installPackage(packageName, logger, packageManager, true, installArgs, tempPath);
    return tempNodeModules;
}
exports.installTempPackage = installTempPackage;
function runTempPackageBin(packageName, logger, packageManager = schema_1.PackageManager.Npm, args = []) {
    const tempNodeModulesPath = installTempPackage(packageName, logger, packageManager);
    // Remove version/tag etc... from package name
    // Ex: @angular/cli@latest -> @angular/cli
    const packageNameNoVersion = packageName.substring(0, packageName.lastIndexOf('@'));
    const pkgLocation = path_1.join(tempNodeModulesPath, packageNameNoVersion);
    const packageJsonPath = path_1.join(pkgLocation, 'package.json');
    // Get a binary location for this package
    let binPath;
    if (fs_1.existsSync(packageJsonPath)) {
        const content = fs_1.readFileSync(packageJsonPath, 'utf-8');
        if (content) {
            const { bin = {} } = JSON.parse(content);
            const binKeys = Object.keys(bin);
            if (binKeys.length) {
                binPath = path_1.resolve(pkgLocation, bin[binKeys[0]]);
            }
        }
    }
    if (!binPath) {
        throw new Error(`Cannot locate bin for temporary package: ${packageNameNoVersion}.`);
    }
    const argv = [binPath, ...args];
    const { status, error } = child_process_1.spawnSync('node', argv, {
        stdio: 'inherit',
        shell: true,
        env: {
            ...process.env,
            NG_DISABLE_VERSION_CHECK: 'true',
            NG_CLI_ANALYTICS: 'false',
        },
    });
    if (status === null && error) {
        throw error;
    }
    return status || 0;
}
exports.runTempPackageBin = runTempPackageBin;
function getPackageManagerArguments(packageManager) {
    switch (packageManager) {
        case schema_1.PackageManager.Yarn:
            return {
                silent: '--silent',
                saveDev: '--dev',
                install: 'add',
                prefix: '--modules-folder',
                noLockfile: '--no-lockfile',
            };
        case schema_1.PackageManager.Pnpm:
            return {
                silent: '--silent',
                saveDev: '--save-dev',
                install: 'add',
                prefix: '--prefix',
                noLockfile: '--no-lockfile',
            };
        default:
            return {
                silent: '--quiet',
                saveDev: '--save-dev',
                install: 'install',
                prefix: '--prefix',
                noLockfile: '--no-package-lock',
            };
    }
}
