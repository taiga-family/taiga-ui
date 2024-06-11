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
} from '@taiga-ui/morph';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { TuiRadioModule } from "@taiga-ui/experimental";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiRadioModule]
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `import { TuiRadioComponent } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiRadioComponent]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<tui-radio
    item="one"
    [formControl]="test"
></tui-radio>
<tui-radio
    size="l"
    [item]="'two'"
    [formControl]="test"
></tui-radio>
<tui-radio
    size="s"
></tui-radio>
`;

const TEMPLATE_AFTER = `
<input
    tuiRadio
    type="radio"
    value="one"
    [formControl]="test"
/>
<input
    tuiRadio
    type="radio"
    size="m"
    [value]="'two'"
    [formControl]="test"
/>
<input
    tuiRadio
    type="radio"
    size="s"
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

    it('should migrate checkbox in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate radio references in ts files', async () => {
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
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
