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
import {TuiPrimitiveCheckboxModule} from '@taiga-ui/core';
import { TuiCheckboxModule } from "@taiga-ui/experimental";
import { TuiCardModule } from "@taiga-ui/experimental";
import { TuiNotification } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCheckboxModule, TuiCardModule]
})
export class Test {
    status: TuiNotification = TuiNotification.Error;
}`;

const COMPONENT_AFTER = `import { TuiCardLarge, TuiCardMedium } from "@taiga-ui/layout";
import { TuiCheckbox } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCheckbox, TuiCardLarge, TuiCardMedium]
})
export class Test {
    status = 'error';
}`;

const TEMPLATE_BEFORE = `
<tui-primitive-checkbox [value]="false"></tui-primitive-checkbox>
<tui-primitive-checkbox [value]="true"></tui-primitive-checkbox>
<tui-primitive-checkbox [value]="computedValue"></tui-primitive-checkbox>

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
    type="checkbox" />
<input
    tuiCheckbox
    type="checkbox" checked />
<input
    tuiCheckbox
    type="checkbox" [checked]="computedValue" />

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
