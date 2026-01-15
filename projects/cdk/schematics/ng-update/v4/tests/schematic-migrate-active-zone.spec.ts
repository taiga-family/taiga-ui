import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
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
@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-hosted-dropdown
    tuiDropdownLimitWidth="fixed"
    [content]="dropdown"
    [(open)]="open"
>
    <button
        size="l"
        title="Menu"
        tuiIconButton
        type="button"
        class="tui-group__auto-width-item"
        [iconRight]="icon"
    ></button>
</tui-hosted-dropdown>
<ng-template
    #dropdown
    let-activeZone
>
    <tui-select
        class="margin"
        [tuiActiveZoneParent]="activeZone"
        [(ngModel)]="selected"
    >
        Nested Select
        <tui-data-list-wrapper
            *tuiDataList
            [items]="selectItems"
        ></tui-data-list-wrapper>
    </tui-select>
</ng-template>
`;

const TEMPLATE_AFTER = `
<div
    tuiDropdownLimitWidth="fixed"
    [tuiDropdown]="dropdown"
    [(tuiDropdownOpen)]="open"
>
    <button
        size="l"
        title="Menu"
        tuiIconButton
        type="button"
        class="tui-group__auto-width-item"
        [iconEnd]="icon"
    ></button>
</div>
<ng-template
    #dropdown
   ${''}
>
    <tui-select
        class="margin"
       ${''}
        [(ngModel)]="selected"
    >
        Nested Select
        <tui-data-list-wrapper
            *tuiDataList
            [items]="selectItems"
        ></tui-data-list-wrapper>
    </tui-select>
</ng-template>
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

    it('should migrate active zone parent in template', async () => {
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
