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

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import {Component} from '@angular/core';
import { TuiInputModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiInputModule]
})
export class Test {}
`.trim();

const COMPONENT_AFTER = `
import { TuiInputModule } from "@taiga-ui/legacy";
import {Component} from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiInputModule]
})
export class Test {}
`.trim();

const TEMPLATE_BEFORE = `
<tui-input [(ngModel)]="value">
    Enter price
    <input
        inputmode="numeric"
        tuiTextfield
        [maskito]="maskitoOptions"
    />
</tui-input>

<tui-textarea [(ngModel)]="value">
    Enter address
    <textarea
        autocomplete="street-address"
        placeholder="Only latin letters and digits are allowed"
        tuiTextfield
        [maskito]="mask"
    ></textarea>
</tui-textarea>
`;

const TEMPLATE_AFTER = `
<tui-input [(ngModel)]="value">
    Enter price
    <input
        inputmode="numeric"
        tuiTextfieldLegacy
        [maskito]="maskitoOptions"
    />
</tui-input>

<tui-textarea [(ngModel)]="value">
    Enter address
    <textarea
        autocomplete="street-address"
        placeholder="Only latin letters and digits are allowed"
        tuiTextfieldLegacy
        [maskito]="mask"
    ></textarea>
</tui-textarea>
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

    it('should migrate [tuiTextfield] => [tuiTextfieldLegacy] in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate `@taiga-ui/kit` => `@taiga-ui/legacy` import in ts files', async () => {
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

    createSourceFile('package.json', '{}');
}
