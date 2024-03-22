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
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiMoneyModule]
})
export class TestComponent {
}`;

const COMPONENT_AFTER = `import { TuiNumberFormatDirective } from "@taiga-ui/core";
import { TuiAmountPipe } from "@taiga-ui/addon-commerce";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiAmountPipe, TuiNumberFormatDirective]
})
export class TestComponent {
}`;

const TEMPLATE_BEFORE = `
<tui-money class="money" [value]="123" [currency]="currency"></tui-money>

<tui-money class="money" [value]="123"></tui-money>

<tui-money customDirective decimal="always" [value]="value"></tui-money>

`;

const TEMPLATE_AFTER = `
<span  class="money">{{ 123 | tuiAmount : currency | async }}</span>

<span  class="money">{{ 123 | tuiAmount : "RUB" | async }}</span>

<span [tuiNumberFormat]='{"decimal":"always"}' customDirective>{{ value | tuiAmount : "RUB" | async }}</span>

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

    it('should migrate Money in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate Money references in ts files', async () => {
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
