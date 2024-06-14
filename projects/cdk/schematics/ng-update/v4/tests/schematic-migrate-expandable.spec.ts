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
import { TuiInputTagModule, TuiMultiSelectModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiInputTagModule, TuiMultiSelectModule]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<tui-input-tag
    [expandable]="true"
    [formControl]="test"
></tui-input-tag>

<tui-input-tag
    [expandable]="false"
    [formControl]="test"
></tui-input-tag>

<tui-multi-select
    [expandable]="false"
>
    <tui-data-list-wrapper
        *tuiDataList
        [items]="filter(search)"
    ></tui-data-list-wrapper>
</tui-multi-select>

<tui-input-tag
    [expandable]="true"
    [rows]="3"
    [formControl]="test"
></tui-input-tag>

<tui-input-tag
    [expandable]="var"
    [rows]="3"
    [formControl]="test"
></tui-input-tag>
`;

const TEMPLATE_AFTER = `
<tui-input-tag
    ${''}
    [formControl]="test"
></tui-input-tag>

<tui-input-tag
    ${''}
    [formControl]="test"
[rows]="1"></tui-input-tag>

<tui-multi-select
    ${''}
[rows]="1">
    <tui-data-list-wrapper
        *tuiDataList
        [items]="filter(search)"
    ></tui-data-list-wrapper>
</tui-multi-select>

<tui-input-tag
    ${''}
    [rows]="3"
    [formControl]="test"
></tui-input-tag>

<!-- Taiga migration TODO: "expandable" property has been removed. Use "rows" property instead -->
<tui-input-tag
    ${''}
    [rows]="3"
    [formControl]="test"
></tui-input-tag>
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

    it('should migrate expandable in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
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
