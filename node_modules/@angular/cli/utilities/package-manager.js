"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const schema_1 = require("../lib/config/schema");
const config_1 = require("./config");
function supports(name) {
    try {
        child_process_1.execSync(`${name} --version`, { stdio: 'ignore' });
        return true;
    }
    catch (_a) {
        return false;
    }
}
function supportsYarn() {
    return supports('yarn');
}
exports.supportsYarn = supportsYarn;
function supportsNpm() {
    return supports('npm');
}
exports.supportsNpm = supportsNpm;
async function getPackageManager(root) {
    let packageManager = await config_1.getConfiguredPackageManager();
    if (packageManager) {
        return packageManager;
    }
    const hasYarn = supportsYarn();
    const hasYarnLock = fs_1.existsSync(path_1.join(root, 'yarn.lock'));
    const hasNpm = supportsNpm();
    const hasNpmLock = fs_1.existsSync(path_1.join(root, 'package-lock.json'));
    if (hasYarn && hasYarnLock && !hasNpmLock) {
        packageManager = schema_1.PackageManager.Yarn;
    }
    else if (hasNpm && hasNpmLock && !hasYarnLock) {
        packageManager = schema_1.PackageManager.Npm;
    }
    else if (hasYarn && !hasNpm) {
        packageManager = schema_1.PackageManager.Yarn;
    }
    else if (hasNpm && !hasYarn) {
        packageManager = schema_1.PackageManager.Npm;
    }
    // TODO: This should eventually inform the user of ambiguous package manager usage.
    //       Potentially with a prompt to choose and optionally set as the default.
    return packageManager || schema_1.PackageManager.Npm;
}
exports.getPackageManager = getPackageManager;
