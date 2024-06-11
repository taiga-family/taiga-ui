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
} from '@taiga-ui/morph';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { TuiBadgedContentModule } from "@taiga-ui/experimental";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBadgedContentModule]
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `import { TuiInitialsPipe } from "@taiga-ui/core";
import { TuiBadgedContentComponent } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiBadgedContentComponent, TuiInitialsPipe]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<tui-badged-content
     colorTop="var(--tui-error-fill)"
     size="l"
     class="tui-space_right-5"
     [rounded]="true"
>
     <tui-avatar
         size="l"
         text="a b"
         [rounded]="true"
     ></tui-avatar>
</tui-badged-content>

<tui-badged-content
  colorBottom="var(--tui-error-fill)"
  contentBottom="tuiIconCheckCircleLarge"
  size="l"
  class="tui-space_right-5"
  [contentTop]="64"
>
    <tui-avatar
        size="l"
        text="e"
    ></tui-avatar>
</tui-badged-content>

<tui-badged-content
  [contentTop]="someVar"
>
    <tui-avatar></tui-avatar>
</tui-badged-content>
`;

const TEMPLATE_AFTER = `
<tui-badged-content
    ${''}
    ${''}
     class="tui-space_right-5"
    ${''}
[style.--tui-radius.%]="50">
<tui-badge-notification
        size="xs"
        tuiSlot="top"
        [style.color]="'var(--tui-error-fill)'"
    ></tui-badge-notification>
     <tui-avatar [src]="'a b' | tuiInitials"
         size="l"
        ${''}
         [round]="true"
     ></tui-avatar>
</tui-badged-content>

<tui-badged-content
 ${''}
 ${''}
 ${''}
  class="tui-space_right-5"
 ${''}
[style.--tui-radius.%]="50"><tui-badge-notification
        size="l"
        tuiSlot="top"
        ${''}
    ></tui-badge-notification>
<tui-icon
        appearance="accent"
        icon="tuiIconCheckCircleLarge"
        size="l"
        tuiBadge
        tuiSlot="bottom"
        [style.color]="'var(--tui-error-fill)'"
    ></tui-icon>

    <tui-avatar [src]="'e' | tuiInitials" [round]="false"
        size="l"
       ${''}
    ></tui-avatar>
</tui-badged-content>

<!-- Taiga migration TODO: contentTop and contentBottom inputs has been removed. Use ng-content, see taiga-ui.dev/components/badged-content  -->
<tui-badged-content
 ${''}
[style.--tui-radius.%]="50">
    <tui-avatar></tui-avatar>
</tui-badged-content>
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

    it('should migrate badge in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate badge references in ts files', async () => {
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
