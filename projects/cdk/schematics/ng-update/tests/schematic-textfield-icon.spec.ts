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

const collectionPath = join(__dirname, '../../migration.json');

const COMPONENT = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {}
`;

const TEMPLATE_BEFORE = `
<tui-input
    formControlName="testValue"
    icon="icon"
    tuiTextfieldExampleText="House"
    tuiHintContent="Write a number"
    class="tui-group__inherit-item"
>
    House
</tui-input>

<tui-input-tag [icon]="icon" iconAlign="left"></tui-input-tag>

<tui-input
    formControlName="testValue"
    icon="icon"
    iconAlign="right"
    tuiHintContent="Write a number"
    class="tui-group__inherit-item"
>
    House
</tui-input>

<tui-primitive-textfield
        class="textfield"
        iconAlign="right"
        [iconContent]="icon"
    >
 </tui-primitive-textfield>
`;

const TEMPLATE_AFTER = `
<tui-input
    formControlName="testValue"
    tuiTextfieldIconLeft="icon"
    ${''}
    tuiHintContent="Write a number"
    class="tui-group__inherit-item"
>
    House
<input tuiTextfield placeholder="House"/> </tui-input>

<tui-input-tag [tuiTextfieldIconLeft]="icon" ></tui-input-tag>

<tui-input
    formControlName="testValue"
    tuiTextfieldIcon="icon"
    ${''}
    tuiHintContent="Write a number"
    class="tui-group__inherit-item"
>
    House
</tui-input>

<tui-primitive-textfield
        class="textfield"
        ${''}
        [tuiTextfieldIcon]="icon"
    >
 </tui-primitive-textfield>
`;

const MODULE_BEFORE = `import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TestComponent} from './test.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TestComponent,
    ],
    exports: [TestComponent],
})
export class ExampleModule {}
`;

const MODULE_AFTER = `import { TuiTextfieldControllerModule } from "@taiga-ui/core";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TestComponent} from './test.component';

@NgModule({
    imports: [
        CommonModule,
        TuiTextfieldControllerModule
    ],
    declarations: [
        TestComponent,
    ],
    exports: [TestComponent],
})
export class ExampleModule {}
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

    it('should edit templates', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should add directive to module', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test.module.ts')).toEqual(MODULE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createSourceFile('test/app/test.module.ts', MODULE_BEFORE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
