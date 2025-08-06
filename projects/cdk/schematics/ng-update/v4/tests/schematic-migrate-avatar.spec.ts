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
import { TuiAvatarModule } from "@taiga-ui/experimental";
import { TuiMarkerIconModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiAvatarModule, TuiMarkerIconModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiFallbackSrcPipe, TuiInitialsPipe, TuiAutoColorPipe } from "@taiga-ui/core";

import { TuiAvatar } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiAvatar, TuiFallbackSrcPipe, TuiInitialsPipe, TuiAutoColorPipe]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-avatar
    avatarUrl="tuiIconUser"
    text="alex inkin"
    [rounded]="true"
    size="xxs"
    [autoColor]="true"
></tui-avatar>
<tui-avatar
    avatarUrl="tuiIconUser"
    [size]="size"
></tui-avatar>
<tui-avatar
    class="tui-avatar"
    [avatarUrl]="avatarUrl"
    [text]="text"
></tui-avatar>
<tui-avatar
    text="alex inkin"
></tui-avatar>
<tui-avatar
    [rounded]="false"
    [avatarUrl]="avatarUrl"
    [fallback]="fallback"
></tui-avatar>
<tui-avatar
    [src]="src"
    size="xxs"
    tuiHintAppearance="onDark"
></tui-avatar>
`;

const TEMPLATE_AFTER = `
<tui-avatar [src]="'tuiIconUser' | tuiFallbackSrc : ('alex inkin' | tuiInitials) | async" [style.background]="'alex inkin' | tuiAutoColor"
   ${''}
   ${''}
    [round]="true"
    size="xs"
   ${''}
></tui-avatar>
<tui-avatar [src]="'tuiIconUser'" [round]="false"
   ${''}
    [size]="size"
></tui-avatar>
<tui-avatar [src]="avatarUrl | tuiFallbackSrc : (text | tuiInitials) | async" [round]="false"
    class="tui-avatar"
   ${''}
   ${''}
></tui-avatar>
<tui-avatar [src]="'alex inkin' | tuiInitials" [round]="false"
   ${''}
></tui-avatar>
<tui-avatar [src]="avatarUrl | tuiFallbackSrc : fallback | async"
    [round]="false"
   ${''}
   ${''}
></tui-avatar>
<tui-avatar
    [src]="src"
    size="xxs"
    tuiHintAppearance="dark"
></tui-avatar>
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

    it('should migrate avatar references in ts files', async () => {
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
