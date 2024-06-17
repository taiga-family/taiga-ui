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
import { CommonModule } from "@angular/common";
import { ArrayElement } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [CommonModule]
})
export class Test {
   some: ArrayElement<string>;
}`;

const COMPONENT_AFTER = `import { TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiArrayElement } from "@taiga-ui/kit";

import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [CommonModule, TuiTextfieldControllerModule]
})
export class Test {
   some: TuiArrayElement<string>;
}`;

const TEMPLATE_BEFORE = `
<tui-primitive-textfield
    filler="filler"
    [(value)]="value"
    (focusedChange)="onFocused($event)"
>
    Type an email
    <input
        tuiTextfield
        type="email"
    />
</tui-primitive-textfield>
<tui-input-slider
    [prefix]="prefix"
    [max]="10"
    [min]="0"
    [(ngModel)]="userAnswer"
>
    2+2=?
</tui-input-slider>
`;

const TEMPLATE_AFTER = `
<tui-primitive-textfield
    tuiTextfieldFiller="filler"
    [(value)]="value"
    (focusedChange)="onFocused($event)"
>
    Type an email
    <input
        tuiTextfield
        type="email"
    />
</tui-primitive-textfield>
<tui-input-slider
    [tuiTextfieldPrefix]="prefix"
    [max]="10"
    [min]="0"
    [(ngModel)]="userAnswer"
>
    2+2=?
</tui-input-slider>
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

    it('should migrate prefix, postfix, filler in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should add textfield controller references in ts files', async () => {
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
