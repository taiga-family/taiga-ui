"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("../../utility/dependencies");
const latest_versions_1 = require("../../utility/latest-versions");
function updateDependencies() {
    return (host, context) => {
        const dependenciesToUpdate = {
            '@angular-devkit/build-angular': latest_versions_1.latestVersions.DevkitBuildAngular,
            '@angular-devkit/build-ng-packagr': latest_versions_1.latestVersions.DevkitBuildNgPackagr,
            '@angular-devkit/build-webpack': latest_versions_1.latestVersions.DevkitBuildWebpack,
            'zone.js': latest_versions_1.latestVersions.ZoneJs,
            'ng-packagr': latest_versions_1.latestVersions.ngPackagr,
            'web-animations-js': '^2.3.2',
            'codelyzer': '^5.1.2',
            '@types/node': '^12.11.1',
        };
        for (const [name, version] of Object.entries(dependenciesToUpdate)) {
            const current = dependencies_1.getPackageJsonDependency(host, name);
            if (!current || current.version === version) {
                continue;
            }
            dependencies_1.addPackageJsonDependency(host, {
                type: current.type,
                name,
                version,
                overwrite: true,
            });
        }
        // `@angular/pwa` package is only needed when running `ng-add`.
        dependencies_1.removePackageJsonDependency(host, '@angular/pwa');
        // Check for @angular-devkit/schematics and @angular-devkit/core
        for (const name of ['@angular-devkit/schematics', '@angular-devkit/core']) {
            const current = dependencies_1.getPackageJsonDependency(host, name);
            if (current) {
                context.logger.info(`Package "${name}" found in the workspace package.json. ` +
                    'This package typically does not need to be installed manually. ' +
                    'If it is not being used by project code, it can be removed from the package.json.');
            }
        }
    };
}
exports.updateDependencies = updateDependencies;
