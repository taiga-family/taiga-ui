import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';
import {DEPRECATED_PROGRESS_PIPES_REG} from '../steps/migrate-progress';
import {createAngularJson} from '../../utils/create-angular-json';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';

const collectionPath = join(__dirname, '../../migration.json');

const APP_COMPONENT = `
@Component({templateUrl: './app.template.html'})
export class AppComponent {
    readonly complexGradient = 'linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))';
}
`;

const TEMPLATE_BEFORE = `
<progress
    tuiProgressBar
    class="progress"
    [value]="slowValue$ | async"
    [max]="colors.length"
    [color]="colors | tuiProgressColorSegments"
></progress>

<progress tuiProgressBar [max]="100" [value]="40" [color]="colors | tuiProgressColorSegmentsAsync | async"></progress>

<progress
    tuiProgressBar
    max="100"
    [color]="complexGradient"
    [value]="fastValue$ | async"
></progress>

<progress
    tuiProgressBar
    [tuiProgressColorSegments]="colors"
    [value]="fastValue$ | async"
></progress>
`;

const TEMPLATE_AFTER = `
<progress
    tuiProgressBar
    class="progress"
    [value]="slowValue$ | async"
    [max]="colors.length"
    [tuiProgressColorSegments]="colors"
></progress>

<progress tuiProgressBar [max]="100" [value]="40" [tuiProgressColorSegments]="colors"></progress>

<progress
    tuiProgressBar
    max="100"
    [color]="complexGradient"
    [value]="fastValue$ | async"
></progress>

<progress
    tuiProgressBar
    [tuiProgressColorSegments]="colors"
    [value]="fastValue$ | async"
></progress>
`;

describe('migrate progress', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    describe('migration works', () => {
        it('html', async () => {
            const tree = await runner
                .runSchematicAsync(
                    'updateToV3',
                    {'skip-logs':  process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                    host,
                )
                .toPromise();

            expect(tree.readContent('test/app-with-progress/app.template.html')).toBe(
                TEMPLATE_AFTER,
            );
        });
    });

    describe('DEPRECATED_PROGRESS_PIPES_REG', () => {
        it('colors | tuiProgressColorSegments', () => {
            expect(
                '[tuiProgressColorSegments]="colors | tuiProgressColorSegments"'.replace(
                    DEPRECATED_PROGRESS_PIPES_REG,
                    '',
                ),
            ).toBe('[tuiProgressColorSegments]="colors"');
        });

        it('colors|tuiProgressColorSegments', () => {
            expect(
                '[tuiProgressColorSegments]="colors|tuiProgressColorSegments"'.replace(
                    DEPRECATED_PROGRESS_PIPES_REG,
                    '',
                ),
            ).toBe('[tuiProgressColorSegments]="colors"');
        });

        it('colors | tuiProgressColorSegments | customPipe', () => {
            expect(
                '[tuiProgressColorSegments]="colors | customPipe | tuiProgressColorSegments"'.replace(
                    DEPRECATED_PROGRESS_PIPES_REG,
                    '',
                ),
            ).toBe('[tuiProgressColorSegments]="colors | customPipe"');
        });

        it('colors | tuiProgressColorSegmentsAsync | async', () => {
            expect(
                '[tuiProgressColorSegments]="colors | tuiProgressColorSegmentsAsync | async"'.replace(
                    DEPRECATED_PROGRESS_PIPES_REG,
                    '',
                ),
            ).toBe('[tuiProgressColorSegments]="colors"');
        });

        it('colors|tuiProgressColorSegmentsAsync|async', () => {
            expect(
                '[tuiProgressColorSegments]="colors | tuiProgressColorSegmentsAsync | async"'.replace(
                    DEPRECATED_PROGRESS_PIPES_REG,
                    '',
                ),
            ).toBe('[tuiProgressColorSegments]="colors"');
        });

        it('colors | customPipe | tuiProgressColorSegmentsAsync | async', () => {
            expect(
                '[tuiProgressColorSegments]="colors | customPipe | tuiProgressColorSegmentsAsync | async"'.replace(
                    DEPRECATED_PROGRESS_PIPES_REG,
                    '',
                ),
            ).toBe('[tuiProgressColorSegments]="colors | customPipe"');
        });
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app-with-progress/app.component.ts', APP_COMPONENT);
    createSourceFile('test/app-with-progress/app.template.html', TEMPLATE_BEFORE);
    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
