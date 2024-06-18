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
import { TuiHostedDropdownModule } from "@taiga-ui/core";


@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiHostedDropdownModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiDropdown } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiDropdown]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-hosted-dropdown
  [content]="template"
  [sided]="sided"
  [canOpen]="canOpen"
  [(open)]="open"
>
  <button>One</button>
  <button tuiHostedDropdownHost>Two</button>
</tui-hosted-dropdown>
<ng-template #template>Wow</ng-template>

<tui-hosted-dropdown
  [content]="template"
  (focusedChange)="onFocused($event)"
  (openChange)="onOpen($event)"
>
  <button>One</button>
</tui-hosted-dropdown>
<ng-template #template>Wow</ng-template>
`;

const TEMPLATE_AFTER = `
<div ${''}
  [tuiDropdown]="template"
  [tuiDropdownSided]="sided"
  [tuiDropdownEnabled]="canOpen"
  [(tuiDropdownOpen)]="open"
>
  <button>One</button>
  <button #tuiDropdownHost>Two</button>
</div>
<ng-template #template>Wow</ng-template>

<div tuiDropdownOpen
  [tuiDropdown]="template"
  (tuiActiveZoneChange)="onFocused($event)"
  (tuiDropdownOpenChange)="onOpen($event)"
>
  <button>One</button>
</div>
<ng-template #template>Wow</ng-template>
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

    it('should migrate labeled in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate labeled references in ts files', async () => {
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
}
