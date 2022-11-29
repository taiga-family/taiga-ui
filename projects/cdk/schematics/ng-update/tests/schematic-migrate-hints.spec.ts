import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';
import {createAngularJson} from '../../utils/create-angular-json';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';

const collectionPath = join(__dirname, '../../migration.json');

const COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {}
`;

const TEMPLATE_BEFORE = `
<button
    tuiButton
    tuiHintDirection="bottom-middle"
    tuiHintMode="onDark"
    tuiPointerHint="Wow! How exciting!"
></button>

<button
    tuiButton
    type="button"
    [tuiManualHint]="template"
    [tuiManualHintShow]="hintShown"
    (click)="toggleHint()"
>
    Hint
</button>

<tui-bar-chart
    class="chart"
    [value]="value"
    [hintContent]="hint"
    [hintMode]="appearance"
></tui-bar-chart>

<tui-tooltip
      describeId="example3"
      mode="onDark"
      content="some tooltip content"
></tui-tooltip>
`;

const TEMPLATE_AFTER = `
<button
    tuiButton
    tuiHintDirection="bottom"
    tuiHintAppearance="onDark"
    tuiHintPointer tuiHint="Wow! How exciting!"
></button>

<button
    tuiButton
    type="button"
    [tuiHint]="template"
    [tuiHintManual]="hintShown"
    (click)="toggleHint()"
>
    Hint
</button>

<tui-bar-chart
    class="chart"
    [value]="value"
    [tuiHintContent]="hint"
    [tuiHintAppearance]="appearance"
></tui-bar-chart>

<tui-tooltip
      describeId="example3"
      appearance="onDark"
      content="some tooltip content"
></tui-tooltip>
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

    it('should migrate polymorpheus', async () => {
        const tree = await runner
            .runSchematicAsync(
                'updateToV3',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
