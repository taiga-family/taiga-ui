import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TUI_VERSION} from '@taiga-ui/cdk';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import cdkPackage from '../../../../package.json';

const collectionPath = join(__dirname, '../../../migration.json');

const TS_FILE_BEFORE = `
import {Component} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {TuiEditorModule} from '@tinkoff/tui-editor';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {TuiInputNumberModule} from '@taiga-ui/kit';

const imports = [TuiEditorModule];
`.trim();

const TS_FILE_AFTER = `
import { TuiInputNumberModule } from "@taiga-ui/legacy";
import { TuiNavigation } from "@taiga-ui/layout";
import { TuiEditor, TuiEditorSocket } from "@taiga-ui/editor";
import {Component} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {shouldCall} from '@taiga-ui/event-plugins';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TUI_VERSION} from '@taiga-ui/cdk';
const imports = [TuiEditor, TuiEditorSocket];
`.trim();

const PACKAGE_JSON_BEFORE = {
    dependencies: {
        '@angular/core': '~13.0.0',
        '@taiga-ui/addon-commerce': '~3.42.0',
        '@tinkoff/ng-polymorpheus': '1.2.3',
        '@tinkoff/ng-event-plugins': '4.5.6',
        '@tinkoff/tui-editor': '1.38.0',
    },
};

const PACKAGE_JSON_AFTER = {
    dependencies: {
        '@angular/core': '~13.0.0',
        '@taiga-ui/addon-commerce': '~3.42.0',
        '@taiga-ui/layout': TUI_VERSION,
        '@taiga-ui/legacy': TUI_VERSION,
        '@taiga-ui/event-plugins': cdkPackage.peerDependencies['@taiga-ui/event-plugins'],
        '@taiga-ui/polymorpheus': cdkPackage.peerDependencies['@taiga-ui/polymorpheus'],
        '@taiga-ui/editor': '^2.0.0',
    },
};

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile('test/app/test.component.ts', TS_FILE_BEFORE);
        createSourceFile('package.json', JSON.stringify(PACKAGE_JSON_BEFORE));

        saveActiveProject();
    });

    it('replace imports inside all *.ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(TS_FILE_AFTER);
    });

    it('replace package names inside all package.json files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(JSON.parse(tree.readContent('package.json'))).toEqual(PACKAGE_JSON_AFTER);
    });

    it('replace imports inside all *.ts files (even if package is not installed directly – peer deps of another direct dep)', async () => {
        const PACKAGE_JSON_DEPS = {
            '@angular/core': '~13.0.0',
            '@taiga-ui/cdk': '~3.42.0',
        };

        createSourceFile(
            'package.json',
            JSON.stringify({dependencies: PACKAGE_JSON_DEPS}),
            {overwrite: true},
        );
        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(TS_FILE_AFTER);
        expect(JSON.parse(tree.readContent('package.json'))).toEqual({
            dependencies: {
                ...PACKAGE_JSON_DEPS,
                '@taiga-ui/event-plugins':
                    cdkPackage.peerDependencies['@taiga-ui/event-plugins'],
                '@taiga-ui/layout': TUI_VERSION,
                '@taiga-ui/legacy': TUI_VERSION,
            },
        });
    });

    afterEach(() => {
        resetActiveProject();
    });
});
