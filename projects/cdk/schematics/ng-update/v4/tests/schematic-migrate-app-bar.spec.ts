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
import { CommonModule } from '@angular/common';
import { TuiAppBarModule } from "@taiga-ui/experimental";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiAppBarModule, CommonModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiAppBar } from "@taiga-ui/layout";

import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiAppBar, CommonModule]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
 <tui-app-bar>
    <button
      tuiAppBarBack
      tuiSlot="left"
    >
      Back
    </button>
    Page title
    <button
      tuiIconButton
      icon="tuiIconSettingsLarge"
      title="settings"
      tuiSlot="right"
    ></button>
  </tui-app-bar>
`;

const TEMPLATE_AFTER = `
 <tui-app-bar>
    <button
      tuiAppBarBack
      tuiSlot="left"
    >
      Back
    </button>
    Page title
    <button
      tuiIconButton
      iconStart="tuiIconSettingsLarge"
      title="settings"
      tuiSlot="right"
    ></button>
  </tui-app-bar>
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

    it('should migrate app bar in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate app bar references in ts files', async () => {
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
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/experimental": "~3.42.0", "@taiga-ui/layout": "~3.42.0"}}',
    );
}
