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
import { TuiProgressSegmentedModule } from "@taiga-ui/experimental";
import { TuiProgressModule } from '@taiga-ui/kit';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiProgressModule, TuiProgressSegmentedModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `
import { TuiProgressModule } from '@taiga-ui/kit';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiProgressModule]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<tui-progress-segmented
      [colors]="color"
      [max]="max"
      [size]="size"
      [value]="value"
></tui-progress-segmented>

<tui-progress-segmented
    [max]="5"
    [value]="3"
/>
`;

const TEMPLATE_AFTER = `
<progress tuiProgressBar
      [tuiProgressColorSegments]="color"
      [max]="max"  [segments]="max"
      [size]="size"
      [value]="value"
></progress>

<progress tuiProgressBar
    [max]="5"  [segments]="5"
    [value]="3"
/>
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

    it('should migrate ProgressSegmented in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate ProgressSegmented references in ts files', async () => {
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
