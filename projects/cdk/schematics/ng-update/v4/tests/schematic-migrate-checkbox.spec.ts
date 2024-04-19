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
import { TuiCheckboxModule } from "@taiga-ui/experimental";
import { TuiCardModule } from "@taiga-ui/experimental";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCheckboxModule, TuiCardModule]
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `import { TuiCardLargeDirective, TuiCardMediumDirective } from "@taiga-ui/layout";
import { TuiCheckboxComponent } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCheckboxComponent, TuiCardLargeDirective, TuiCardMediumDirective]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<tui-checkbox
    formControlName="testValue1"
    class="checkbox"
></tui-checkbox>
<div>
    <tui-checkbox
        size="m"
        [formControl]="test"
    ></tui-checkbox>
</div>
`;

const TEMPLATE_AFTER = `
<input
    tuiCheckbox
    type="checkbox"
    formControlName="testValue1"
    class="checkbox"
/>
<div>
    <input
        tuiCheckbox
        type="checkbox"
        size="s"
        [formControl]="test"
    />
</div>
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

    it('should migrate checkbox in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate checkbox references in ts files', async () => {
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

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
