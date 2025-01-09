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
import { TuiScrollbarModule } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiScrollbarModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiScrollbar, TuiScrollable } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiScrollbar, TuiScrollable]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-scrollbar>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</tui-scrollbar>

<tui-scrollbar>
    <cdk-virtual-scroll-viewport
        itemSize="50"
        tuiScrollable
        class="tui-zero-scrollbar"
    >
        <div
            *cdkVirtualFor="let item of items"
        >
            {{ item }}
        </div>
    </cdk-virtual-scroll-viewport>
</tui-scrollbar>
`;

const TEMPLATE_AFTER = `
<tui-scrollbar>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</tui-scrollbar>

<tui-scrollbar>
    <cdk-virtual-scroll-viewport
        itemSize="50"
        tuiScrollable
        class="tui-zero-scrollbar"
    >
        <div
            *cdkVirtualFor="let item of items"
        >
            {{ item }}
        </div>
    </cdk-virtual-scroll-viewport>
</tui-scrollbar>
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

    it('should migrate scrollbar', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
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
