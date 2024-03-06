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
import {join} from 'path';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { Component } from '@angular/core';
import { TuiPreventDefaultModule } from "@taiga-ui/cdk";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiPreventDefaultModule, CommonModule]
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `
import { Component } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [CommonModule]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<button tuiButton tuiPreventDefault="mousedown">
    Button
</button>

<a
  href="https://taiga-ui.dev"
  target="_blank"
  tuiPreventDefault="click"
>
  Link
</a>
`;

const TEMPLATE_AFTER = `
<button tuiButton (mousedown.prevent.silent)="0">
    Button
</button>

<a
  href="https://taiga-ui.dev"
  target="_blank"
  (click.prevent.silent)="0"
>
  Link
</a>
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

    it('should migrate tuiPreventDefault in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should remove TuiPreventDefault references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => resetActiveProject());
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
