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
import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../migration.json');

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host, '/', '**/**'));

        createMainFiles();

        saveActiveProject();
    });

    it('should rename types', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(
            `import { Component } from '@angular/core';
import { some } from '@taiga-ui/kit';
import { any } from '@taiga-ui/cdk'
import { unknown } from '@taiga-ui/core'

@Component({templateUrl: './app.template.html'})
export class AppComponent {}`,
        );

        expect(tree.readContent('test/style.less')).toEqual(
            `@import '~@taiga-ui/core/styles/taiga-ui-global';`,
        );

        expect(tree.readContent('test/app/app.template.less')).toEqual(
            `@import '~@taiga-ui/core/styles/taiga-ui-local';`,
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
import { some } from '@taiga-ui/kit/types';
import { any } from '@taiga-ui/cdk/directives/any'
import { unknown } from '@taiga-ui/core'

@Component({templateUrl: './app.template.html'})
export class AppComponent {}`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);

    createSourceFile(
        'test/style.less',
        `@import '~@taiga-ui/core/styles/taiga-ui-global';`,
    );
    createSourceFile(
        'test/app/app.template.less',
        `@import '~@taiga-ui/core/styles/taiga-ui-local';`,
    );

    createAngularJson();
}
