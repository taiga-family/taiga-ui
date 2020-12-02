"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const architect_1 = require("@angular-devkit/architect");
const node_1 = require("@angular-devkit/architect/node");
const testing_1 = require("@angular-devkit/architect/testing");
const core_1 = require("@angular-devkit/core");
exports.veEnabled = process.argv.includes('--ve');
const devkitRoot = core_1.normalize(global._DevKitRoot); // tslint:disable-line:no-any
exports.workspaceRoot = core_1.join(devkitRoot, `tests/angular_devkit/build_angular/hello-world-app${exports.veEnabled ? '-ve' : ''}/`);
exports.host = new testing_1.TestProjectHost(exports.workspaceRoot);
exports.outputPath = core_1.normalize('dist');
exports.browserTargetSpec = { project: 'app', target: 'build' };
exports.devServerTargetSpec = { project: 'app', target: 'serve' };
exports.extractI18nTargetSpec = { project: 'app', target: 'extract-i18n' };
exports.karmaTargetSpec = { project: 'app', target: 'test' };
exports.tslintTargetSpec = { project: 'app', target: 'lint' };
exports.protractorTargetSpec = { project: 'app-e2e', target: 'e2e' };
async function createArchitect(workspaceRoot) {
    const registry = new core_1.schema.CoreSchemaRegistry();
    registry.addPostTransform(core_1.schema.transforms.addUndefinedDefaults);
    const workspaceSysPath = core_1.getSystemPath(workspaceRoot);
    const { workspace } = await core_1.workspaces.readWorkspace(workspaceSysPath, core_1.workspaces.createWorkspaceHost(exports.host));
    const architectHost = new testing_1.TestingArchitectHost(workspaceSysPath, workspaceSysPath, new node_1.WorkspaceNodeModulesArchitectHost(workspace, workspaceSysPath));
    const architect = new architect_1.Architect(architectHost, registry);
    return {
        workspace,
        architectHost,
        architect,
    };
}
exports.createArchitect = createArchitect;
async function browserBuild(architect, host, target, overrides, scheduleOptions) {
    const run = await architect.scheduleTarget(target, overrides, scheduleOptions);
    const output = (await run.result);
    expect(output.success).toBe(true);
    expect(output.outputPaths[0]).not.toBeUndefined();
    const outputPath = core_1.normalize(output.outputPaths[0]);
    const fileNames = await host.list(outputPath).toPromise();
    const files = fileNames.reduce((acc, path) => {
        let cache = null;
        Object.defineProperty(acc, path, {
            enumerable: true,
            get() {
                if (cache) {
                    return cache;
                }
                if (!fileNames.includes(path)) {
                    return Promise.reject('No file named ' + path);
                }
                cache = host
                    .read(core_1.join(outputPath, path))
                    .toPromise()
                    .then(content => core_1.virtualFs.fileBufferToString(content));
                return cache;
            },
        });
        return acc;
    }, {});
    await run.stop();
    return {
        output,
        files,
    };
}
exports.browserBuild = browserBuild;
exports.lazyModuleFiles = {
    'src/app/lazy/lazy-routing.module.ts': `
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    const routes: Routes = [];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class LazyRoutingModule { }
  `,
    'src/app/lazy/lazy.module.ts': `
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    import { LazyRoutingModule } from './lazy-routing.module';

    @NgModule({
      imports: [
        CommonModule,
        LazyRoutingModule
      ],
      declarations: []
    })
    export class LazyModule { }
  `,
};
exports.lazyModuleStringImport = {
    'src/app/app.module.ts': `
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { RouterModule } from '@angular/router';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot([
          { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
        ])
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
  `,
};
exports.lazyModuleFnImport = {
    'src/app/app.module.ts': exports.lazyModuleStringImport['src/app/app.module.ts'].replace(`loadChildren: './lazy/lazy.module#LazyModule'`, `loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)`),
};
