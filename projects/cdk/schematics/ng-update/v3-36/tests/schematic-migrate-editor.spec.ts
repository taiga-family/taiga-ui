/* eslint-disable rxjs/no-topromise */
import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, `../../../migration.json`);

const COMPONENT_BEFORE = `import { TUI_EDITOR_EXTENSIONS, TUI_ATTACH_FILES_LOADER } from '@taiga-ui/addon-editor';

@Component({
    selector: 'test',
    templateUrl: './test.template.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/addon-editor/extensions/link').then(
                    ({TuiLink}) => TuiLink,
                ),
                import('@taiga-ui/addon-editor/extensions/jump-anchor').then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
                import('@taiga-ui/addon-editor/extensions/file-link').then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [FileIoService],
            useFactory: fileLoader,
        },
    ],
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `import { TUI_EDITOR_EXTENSIONS, TUI_ATTACH_FILES_LOADER } from '@tinkoff/tui-editor';

@Component({
    selector: 'test',
    templateUrl: './test.template.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tinkoff/tui-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@tinkoff/tui-editor/extensions/link').then(
                    ({TuiLink}) => TuiLink,
                ),
                import('@tinkoff/tui-editor/extensions/jump-anchor').then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
                import('@tinkoff/tui-editor/extensions/file-link').then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [FileIoService],
            useFactory: fileLoader,
        },
    ],
})
export class TestComponent {
}`;

const PACKAGE_BEFORE = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@taiga-ui/addon-editor": "3.35.0"
    }
}`;

const PACKAGE_AFTER = `{
    "dependencies": {
        "@angular/core": "~13.0.0",
        "@tinkoff/tui-editor": "^1.0.1"
    }
}`;

describe(`ng-update`, () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner(`schematics`, collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it(`should migrate addon-editor`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3_36`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/test.component.ts`)).toEqual(COMPONENT_AFTER);
        expect(tree.readContent(`package.json`)).toEqual(PACKAGE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(`test/app/test.component.ts`, COMPONENT_BEFORE);

    createSourceFile(`test/app/test.template.html`, `<tui-editor></tui-editor>`);

    createAngularJson();

    createSourceFile(`package.json`, PACKAGE_BEFORE);
}
