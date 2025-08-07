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

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import {FormsModule} from '@angular/forms';
import { TuiCheckboxBlockModule, TuiRadioBlockModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [FormsModule, TuiCheckboxBlockModule, TuiRadioBlockModule]
})
export class Test {}`;

const COMPONENT_AFTER = `import { TuiAppearance } from "@taiga-ui/core";

import {FormsModule} from '@angular/forms';
import { TuiBlock, TuiCheckbox, TuiRadio } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [FormsModule, TuiBlock, TuiCheckbox, TuiRadio, TuiAppearance]
})
export class Test {}`;

const TEMPLATE_BEFORE = `
<tui-checkbox-block [(ngModel)]="value" [pseudoInvalid]="invalid" [pseudoFocus]="pseudoFocus">Content</tui-checkbox-block>

<form [formGroup]="testForm">
  <tui-radio-block
    formControlName="testValue"
    item="orange"
  >
    Oranges
  </tui-radio-block>
  <tui-radio-block
    formControlName="testValue"
    item="apple"
  >
    Apples
  </tui-radio-block>
  <tui-radio-block
    formControlName="testValue"
    item="pineapple"
  >
    Pineapples
  </tui-radio-block>
</form>

<tui-checkbox-block
  *ngFor="let block of blocks"
  size="m"
  [hideCheckbox]="true"
  [(ngModel)]="value"
  [contentAlign]="contentAlign"
>
  {{ block.name }}
</tui-checkbox-block>

<tui-checkbox-block
    formControlName="testValue3"
    size="xs"
    [hideCheckbox]="true"
>
    Pineapples
</tui-checkbox-block>

<tui-radio-block
    formControlName="testValue"
    size="l"
    [hideRadio]="true"
    [item]="fruit"
>
    {{ fruit }}
</tui-radio-block>

<tui-primitive-textfield [(value)]="value" [pseudoFocus]="pseudoFocus">Type something</tui-primitive-textfield>

<tui-checkbox-block [formControl]="control" [size]="size">
    {{ label() }}
</tui-checkbox-block>
`.trim();

const TEMPLATE_AFTER = `
<label tuiBlock><input tuiCheckbox type="checkbox" [(ngModel)]="value" [tuiAppearanceMode]="invalid ? 'invalid' : null" [tuiAppearanceFocus]="pseudoFocus">Content</label>

<form [formGroup]="testForm">
 <label tuiBlock> <input tuiRadio type="radio"
    formControlName="testValue"
    value="orange"
  >
    Oranges
  </label>
 <label tuiBlock> <input tuiRadio type="radio"
    formControlName="testValue"
    value="apple"
  >
    Apples
  </label>
 <label tuiBlock> <input tuiRadio type="radio"
    formControlName="testValue"
    value="pineapple"
  >
    Pineapples
  </label>
</form>
<label *ngFor="let block of blocks" tuiBlock="m" appearance="">
<input tuiCheckbox type="checkbox" tuiBlock
  ${''}
  ${''}
  ${''}
  [(ngModel)]="value"
  ${''}
>
  {{ block.name }}
</label>
<label tuiBlock="s" appearance="">
<input tuiCheckbox type="checkbox" tuiBlock
    formControlName="testValue3"
    ${''}
    ${''}
>
    Pineapples
</label>
<label tuiBlock="l" appearance="">
<input tuiRadio type="radio" tuiBlock
    formControlName="testValue"
    ${''}
    ${''}
    [value]="fruit"
>
    {{ fruit }}
</label>

<tui-primitive-textfield [(value)]="value" [pseudoFocus]="pseudoFocus">Type something</tui-primitive-textfield>
<label [tuiBlock]="size">
<input tuiCheckbox type="checkbox" [formControl]="control" >
    {{ label() }}
</label>
`.trim();

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

    it('should migrate blocked in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate blocked references in ts files', async () => {
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
    createSourceFile('package.json', '{}');
}
