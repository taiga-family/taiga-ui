"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectType;
(function (ProjectType) {
    ProjectType["Application"] = "application";
    ProjectType["Library"] = "library";
})(ProjectType = exports.ProjectType || (exports.ProjectType = {}));
var Builders;
(function (Builders) {
    Builders["AppShell"] = "@angular-devkit/build-angular:app-shell";
    Builders["Server"] = "@angular-devkit/build-angular:server";
    Builders["Browser"] = "@angular-devkit/build-angular:browser";
    Builders["Karma"] = "@angular-devkit/build-angular:karma";
    Builders["TsLint"] = "@angular-devkit/build-angular:tslint";
    Builders["NgPackagr"] = "@angular-devkit/build-ng-packagr:build";
    Builders["DevServer"] = "@angular-devkit/build-angular:dev-server";
    Builders["ExtractI18n"] = "@angular-devkit/build-angular:extract-i18n";
    Builders["Protractor"] = "@angular-devkit/build-angular:protractor";
})(Builders = exports.Builders || (exports.Builders = {}));
