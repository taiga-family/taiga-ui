import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {TUI_EDITOR_VERSION} from '../steps/migrate-editor';
import {
    TUI_EVENT_PLUGINS_VERSION,
    TUI_POLYMORPHEUS_VERSION,
} from '../steps/update-packages';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import {
    TUI_SANITIZER,
    TuiAlertModule,
    TuiDialogModule,
    TuiRootModule,
} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';
import {TuiEditorModule, TuiEditorTool, TUI_EDITOR_DEFAULT_EDITOR_TOOLS} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiEditorModule],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@taiga-ui/addon-editor/extensions/image-editor').then(
                    ({tuiCreateImageEditorExtension}) =>
                        tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        }
    ],
})
export class Test {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    protected readonly allTools = TUI_EDITOR_DEFAULT_EDITOR_TOOLS;
}`;

const COMPONENT_AFTER = `import { TUI_SANITIZER } from "@taiga-ui/legacy";
import { TUI_PROPRIETARY_EDITOR_ICONS } from "@taiga-ui/proprietary";
import { tuiEditorOptionsProvider, TuiEditor, TuiEditorSocket, TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_DEFAULT_TOOLS } from "@taiga-ui/editor";

import { TuiRoot, TuiAlert, TuiDialog } from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';
import {TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiEditor, TuiEditorSocket],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@taiga-ui/editor').then(
                    ({tuiCreateImageEditorExtension}) =>
                        tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        tuiEditorOptionsProvider({icons: TUI_PROPRIETARY_EDITOR_ICONS})
    ],
})
export class Test {
    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    protected readonly allTools = TUI_EDITOR_DEFAULT_TOOLS;
}
`.trim();

const PACKAGE_JSON_BEFORE = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/core": "~3.35.0",
        "@taiga-ui/cdk": "~3.35.0",
        "@taiga-ui/proprietary-core": "~3.35.0",
        "@taiga-ui/addon-editor": "~3.35.0",
        "@tinkoff/ng-polymorpheus": "1.2.3",
        "@tinkoff/ng-event-plugins": "4.5.6"
    }
}`;

const PACKAGE_JSON_AFTER = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/core": "~3.35.0",
        "@taiga-ui/cdk": "~3.35.0",
        "@taiga-ui/editor": "${TUI_EDITOR_VERSION}",
        "@taiga-ui/event-plugins": "${TUI_EVENT_PLUGINS_VERSION}",
        "@taiga-ui/legacy": "${TUI_VERSION}",
        "@taiga-ui/polymorpheus": "${TUI_POLYMORPHEUS_VERSION}",
        "@taiga-ui/proprietary": "${TUI_VERSION}"
    }
}`.trim();

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

    it('should migrate addon editor references in files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('package.json').trim()).toEqual(PACKAGE_JSON_AFTER);
        expect(tree.readContent('test/app/test.component.ts').trim()).toEqual(
            COMPONENT_AFTER,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createSourceFile('test/app/test.template.html', '');
    createSourceFile('package.json', PACKAGE_JSON_BEFORE);
}
