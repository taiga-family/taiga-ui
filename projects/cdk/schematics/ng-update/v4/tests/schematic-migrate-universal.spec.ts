import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../../../migration.json');

const MAIN_SERVER_BEFORE = `
import '@ng-web-apis/universal/mocks';

import type {ApplicationRef} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {config} from './app/app.config.server';

const bootstrap = async (): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, config);

export default bootstrap;
`;

const MAIN_SERVER_AFTER = `import type {ApplicationRef} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {config} from './app/app.config.server';

const bootstrap = async (): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, config);

export default bootstrap;
`.trim();

const PACKAGE_JSON_BEFORE = `{
    "dependencies": {
        "@angular/core": "~13.0.0"
    }
}`;

const PACKAGE_JSON_AFTER = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/event-plugins": "^4.2.3"
    }
}`.trim();

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate main server file', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('package.json').trim()).toEqual(PACKAGE_JSON_AFTER);
        expect(tree.readContent('test/main.server.ts').trim()).toEqual(MAIN_SERVER_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/main.server.ts', MAIN_SERVER_BEFORE);
    createSourceFile('package.json', PACKAGE_JSON_BEFORE);
}
