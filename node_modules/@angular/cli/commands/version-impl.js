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
const child_process = require("child_process");
const fs = require("fs");
const path = require("path");
const command_1 = require("../models/command");
const color_1 = require("../utilities/color");
const find_up_1 = require("../utilities/find-up");
class VersionCommand extends command_1.Command {
    async run() {
        const pkg = require(path.resolve(__dirname, '..', 'package.json'));
        let projPkg;
        try {
            projPkg = require(path.resolve(this.workspace.root, 'package.json'));
        }
        catch (_a) {
            projPkg = undefined;
        }
        const patterns = [
            /^@angular\/.*/,
            /^@angular-devkit\/.*/,
            /^@bazel\/.*/,
            /^@ngtools\/.*/,
            /^@nguniversal\/.*/,
            /^@schematics\/.*/,
            /^rxjs$/,
            /^typescript$/,
            /^ng-packagr$/,
            /^webpack$/,
        ];
        const maybeNodeModules = find_up_1.findUp('node_modules', __dirname);
        const packageRoot = projPkg
            ? path.resolve(this.workspace.root, 'node_modules')
            : maybeNodeModules;
        const packageNames = [
            ...Object.keys((pkg && pkg['dependencies']) || {}),
            ...Object.keys((pkg && pkg['devDependencies']) || {}),
            ...Object.keys((projPkg && projPkg['dependencies']) || {}),
            ...Object.keys((projPkg && projPkg['devDependencies']) || {}),
        ];
        if (packageRoot != null) {
            // Add all node_modules and node_modules/@*/*
            const nodePackageNames = fs.readdirSync(packageRoot).reduce((acc, name) => {
                if (name.startsWith('@')) {
                    return acc.concat(fs.readdirSync(path.resolve(packageRoot, name)).map(subName => name + '/' + subName));
                }
                else {
                    return acc.concat(name);
                }
            }, []);
            packageNames.push(...nodePackageNames);
        }
        const versions = packageNames
            .filter(x => patterns.some(p => p.test(x)))
            .reduce((acc, name) => {
            if (name in acc) {
                return acc;
            }
            acc[name] = this.getVersion(name, packageRoot, maybeNodeModules);
            return acc;
        }, {});
        let ngCliVersion = pkg.version;
        if (!__dirname.match(/node_modules/)) {
            let gitBranch = '??';
            try {
                const gitRefName = child_process.execSync('git rev-parse --abbrev-ref HEAD', {
                    cwd: __dirname,
                    encoding: 'utf8',
                    stdio: 'pipe',
                });
                gitBranch = gitRefName.replace('\n', '');
            }
            catch (_b) { }
            ngCliVersion = `local (v${pkg.version}, branch: ${gitBranch})`;
        }
        let angularCoreVersion = '';
        const angularSameAsCore = [];
        if (projPkg) {
            // Filter all angular versions that are the same as core.
            angularCoreVersion = versions['@angular/core'];
            if (angularCoreVersion) {
                for (const angularPackage of Object.keys(versions)) {
                    if (versions[angularPackage] == angularCoreVersion &&
                        angularPackage.startsWith('@angular/')) {
                        angularSameAsCore.push(angularPackage.replace(/^@angular\//, ''));
                        delete versions[angularPackage];
                    }
                }
                // Make sure we list them in alphabetical order.
                angularSameAsCore.sort();
            }
        }
        const namePad = ' '.repeat(Object.keys(versions).sort((a, b) => b.length - a.length)[0].length + 3);
        const asciiArt = `
     _                      _                 ____ _     ___
    / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
  / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                |___/
    `
            .split('\n')
            .map(x => color_1.colors.red(x))
            .join('\n');
        this.logger.info(asciiArt);
        this.logger.info(`
      Angular CLI: ${ngCliVersion}
      Node: ${process.versions.node}
      OS: ${process.platform} ${process.arch}

      Angular: ${angularCoreVersion}
      ... ${angularSameAsCore
            .reduce((acc, name) => {
            // Perform a simple word wrap around 60.
            if (acc.length == 0) {
                return [name];
            }
            const line = acc[acc.length - 1] + ', ' + name;
            if (line.length > 60) {
                acc.push(name);
            }
            else {
                acc[acc.length - 1] = line;
            }
            return acc;
        }, [])
            .join('\n... ')}
      Ivy Workspace: ${projPkg ? this.getIvyWorkspace() : ''}

      Package${namePad.slice(7)}Version
      -------${namePad.replace(/ /g, '-')}------------------
      ${Object.keys(versions)
            .map(module => `${module}${namePad.slice(module.length)}${versions[module]}`)
            .sort()
            .join('\n')}
    `.replace(/^ {6}/gm, ''));
    }
    getVersion(moduleName, projectNodeModules, cliNodeModules) {
        try {
            if (projectNodeModules) {
                const modulePkg = require(path.resolve(projectNodeModules, moduleName, 'package.json'));
                return modulePkg.version;
            }
        }
        catch (_a) { }
        try {
            if (cliNodeModules) {
                const modulePkg = require(path.resolve(cliNodeModules, moduleName, 'package.json'));
                return modulePkg.version + ' (cli-only)';
            }
        }
        catch (_b) { }
        return '<error>';
    }
    getIvyWorkspace() {
        try {
            const content = fs.readFileSync(path.resolve(this.workspace.root, 'tsconfig.json'), 'utf-8');
            const tsConfig = core_1.parseJson(content, core_1.JsonParseMode.Loose);
            if (!core_1.isJsonObject(tsConfig)) {
                return '<error>';
            }
            const { angularCompilerOptions } = tsConfig;
            return core_1.isJsonObject(angularCompilerOptions) && angularCompilerOptions.enableIvy === false
                ? 'No'
                : 'Yes';
        }
        catch (_a) {
            return '<error>';
        }
    }
}
exports.VersionCommand = VersionCommand;
VersionCommand.aliases = ['v'];
