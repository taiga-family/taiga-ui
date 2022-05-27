import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

const collectionPath = join(__dirname, '../../migration.json');

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

    it('should rename types', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(
            `import { Component } from '@angular/core';
import { TuiButtonOptions, some } from '@taiga-ui/core';

const options: TuiButtonOptions = {};
const config  = {};

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   some: TuiButtonOptions = {};
}`,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `import { Component } from '@angular/core';
import { ButtonOptions, some, WithDateMaskPipeConfig } from '@taiga-ui/core/types';

const options: ButtonOptions = {};
const config: WithDateMaskPipeConfig = {}

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   some: ButtonOptions = {};
}`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);
}
