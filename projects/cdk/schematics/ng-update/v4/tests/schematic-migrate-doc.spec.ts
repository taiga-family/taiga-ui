import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ClassesComponent} from './classes.component';

@NgModule({
    imports: [
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ClassesComponent)),
    ],
    declarations: [ClassesComponent],
    exports: [ClassesComponent],
})
export class ClassesModule {}
`;

const COMPONENT_AFTER = `import { TuiAddonDoc } from "@taiga-ui/addon-doc";

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ClassesComponent} from './classes.component';

@NgModule({
    imports: [
        ...TuiAddonDoc,
        RouterModule /* use tuiProvideRoutePageTab in provideRouter */,
    ],
    declarations: [ClassesComponent],
    exports: [ClassesComponent],
})
export class ClassesModule {}
`.trim();

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

    it('should migrate doc references in ts files', async () => {
        const tree = await runner.runSchematic(
            'migrateAddonDocV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts').trim()).toEqual(
            COMPONENT_AFTER,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createSourceFile('test/app/test.template.html', '');
    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-doc": "~3.42.0"}}',
    );
}
