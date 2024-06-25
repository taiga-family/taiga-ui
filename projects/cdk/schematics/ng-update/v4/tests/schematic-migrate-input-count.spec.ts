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
import { TuiInputCountModule } from "@taiga-ui/kit";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiInputCountModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiInputNumberModule } from "@taiga-ui/legacy";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiInputNumberModule]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-input-count
    [formControl]="test"
    [step]="2"
    [min]="1"
    [max]="200"
></tui-input-count>

<tui-input-count
    [formControl]="test"
    [min]="1"
    [max]="200"
></tui-input-count>
`;

const TEMPLATE_AFTER = `
<tui-input-number decimal="never"
    [formControl]="test"
    [step]="2"
    [min]="1"
    [max]="200"
></tui-input-number>

<tui-input-number decimal="never" [step]="1"
    [formControl]="test"
    [min]="1"
    [max]="200"
></tui-input-number>
`;

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

    it('should migrate input-count in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate input-count references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
