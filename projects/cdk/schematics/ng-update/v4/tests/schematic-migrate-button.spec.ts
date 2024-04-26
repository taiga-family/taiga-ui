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
import { TuiButtonModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiButtonModule]
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `import { TuiButtonDirective, TuiButtonLoadingComponent } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiButtonDirective, TuiButtonLoadingComponent]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<button
    appearance="primary"
    tuiButton
    type="button"
    [icon]="icon"
    [shape]="rounded"
>
    primary
</button>

<button
    tuiButton
    shape="rounded"
    [icon]="icon"
    [showLoader]="showLoader"
>
    primary
</button>
`;

const TEMPLATE_AFTER = `
<!-- TODO: (Taiga UI migration) [shape] input has been removed. Please use border-radius css property for rounding borders https://taiga-ui.dev/components/button -->
<button
    appearance="primary"
    tuiButton
    type="button"
    [iconLeft]="icon"
    [shape]="rounded"
>
    primary
</button>

<button
    tuiButton
    [style.border-radius.%]="100"
    [iconLeft]="icon"
    [loading]="showLoader"
>
    primary
</button>
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

    it('should migrate button in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate button references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => resetActiveProject());
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);
}
