"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("../../utility/dependencies");
const latest_versions_1 = require("../../utility/latest-versions");
function updateDependencies() {
    return (host) => {
        const dependenciesToUpdate = {
            '@angular/pwa': '^0.803.9',
            '@angular-devkit/build-angular': latest_versions_1.latestVersions.DevkitBuildAngular,
            '@angular-devkit/build-ng-packagr': latest_versions_1.latestVersions.DevkitBuildNgPackagr,
            '@angular-devkit/build-webpack': latest_versions_1.latestVersions.DevkitBuildWebpack,
            'zone.js': latest_versions_1.latestVersions.ZoneJs,
            tsickle: '^0.37.0',
            'ng-packagr': latest_versions_1.latestVersions.ngPackagr,
            'web-animations-js': '^2.3.2',
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
    };
}
exports.updateDependencies = updateDependencies;
