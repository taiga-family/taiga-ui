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

const COMPONENT_BEFORE = `import { Component } from "@angular/core";
import { TuiMobileTabsModule } from "@taiga-ui/addon-mobile";

@Component({
    standalone: true,
    selector: 'test-mobile-tabs',
    templateUrl: './test.template.html',
    imports: [TuiMobileTabsModule]
})
export class Test {
	activeItemIndex = 0;
}`;

const TEMPLATE_BEFORE = `<tui-tabs tuiMobileTabs [(activeItemIndex)]="activeItemIndex">
    <button tuiTab>
        Tab 1
    </button>
    <button tuiTab>
        Tab 2
    </button>
</tui-tabs>`;

const COMPONENT_AFTER = `import { TuiSegmented } from "@taiga-ui/kit";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'test-mobile-tabs',
    templateUrl: './test.template.html',
    imports: [TuiSegmented]
})
export class Test {
	activeItemIndex = 0;
}`;

const TEMPLATE_AFTER = `<tui-segmented  [(activeItemIndex)]="activeItemIndex">
    <button>
        Tab 1
    </button>
    <button>
        Tab 2
    </button>
</tui-segmented>`;

describe('ng-migrate', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));
        createMainFiles();
        saveActiveProject();
    });

    afterEach(() => {
        resetActiveProject();
    });

    it('should migrate mobile tabs in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate mobile tabs references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toBe(COMPONENT_AFTER);
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/cdk": "~3.42.0"}}',
    );
}
