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

const COMPONENT = `
import {TuiButton} from '@taiga-ui/core/components/button';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiButton]
})
class TestComponent {}
`;

const COMPONENT_WITH_CONDITION = `
import {TuiButton} from '@taiga-ui/core/components/button';

@Component({
    standalone: true,
    templateUrl: './test-with-condition.template.html',
    imports: [TuiButton]
})
class TestWithConditionComponent {
    get appearance() {return 'flat'};
}
`;

const TEMPLATE_BEFORE = `
<button tuiButton></button>

<button tuiButton [appearance]="'whiteblock-active'"></button>

<button tuiButton appearance="whiteblock-active"></button>

<a tuiIconButton [appearance]="'whiteblock-active'"></a>

<a tuiButton [appearance]="
  'flat'
"></a>
`;

const TEMPLATE_WITH_CONDITION_BEFORE = `
<a tuiButton [appearance]="
  true ? appearance : 'flat'
"></a>
`;

const TEMPLATE_AFTER = `
<button tuiButton></button>

<button tuiButton appearance="whiteblock" data-mode="checked"></button>

<button tuiButton appearance="whiteblock" data-mode="checked"></button>

<a tuiIconButton appearance="whiteblock" data-mode="checked"></a>

<a tuiButton [appearance]="
  'flat'
"></a>
`;

const TEMPLATE_WITH_CONDITION_AFTER = `<!-- Taiga migration TODO: tuiButton "whiteblock-active" appearance is no longer available. Use 'appearance="whiteblock" data-mode="checked"' -->

<a tuiButton [appearance]="
  true ? appearance : 'flat'
"></a>
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

    it('should migrate button appearance in a template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate button appearance with condition in a template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test-with-condition.template.html')).toEqual(
            TEMPLATE_WITH_CONDITION_AFTER,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT);
    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createSourceFile(
        'test/app/test-with-condition.component.ts',
        COMPONENT_WITH_CONDITION,
    );
    createSourceFile(
        'test/app/test-with-condition.template.html',
        TEMPLATE_WITH_CONDITION_BEFORE,
    );

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
