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

const collectionPath = join(__dirname, '../../migration.json');

const APP_MODULE = `
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiSliderModule} from '@taiga-ui/kit';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSliderModule
    ],
    declarations: [AppComponent],
})
export class AppModule {}
`;

const APP_COMPONENT = `
@Component({templateUrl: './app.template.html'})
export class AppComponent {
    value = 4;
}
`;

const APP_TEMPLATE = `
<h1>Title</h1>
<inline-html-child></inline-html-child>

<tui-input-slider [max]="100" [(ngModel)]="value" [min]="0" valueContent="TOP SECRET">
    Usage of the component without deprecated props
</tui-input-slider>

<tui-input-range
    [min]="0"
    [max]="100"
    [leftValueContent]="valueContent"
    [rightValueContent]="valueContent"
    [formControl]="control"
>
    Desired departure day
</tui-input-range>

<file-html-child></file-html-child>
<footer>123</footer>
`;

/** ___test/file-html-child/*___ */

const FILE_HTML_CHILD_COMPONENT_BEFORE = `
@Component({
    selector: 'file-html-child',
    templateUrl: './file-html-child.template.html'
})
export class FileHtmlChildComponent {}
`;

const FILE_HTML_CHILD_COMPONENT_AFTER = `import { TuiContextWithImplicit } from "@taiga-ui/cdk";

@Component({
    selector: 'file-html-child',
    templateUrl: './file-html-child.template.html'
})
export class FileHtmlChildComponent {
    tuiMigrationMinMaxLabel(context: TuiContextWithImplicit<number>): string {
        const currentValue = context.$implicit;
        const maxValue = 100; // TODO: (Taiga UI migration) replace with the MAX value of the input
        const maxLabelText = "Max"; // TODO: (Taiga UI migration) replace with the required label
        const minValue = 0; // TODO: (Taiga UI migration) replace with the MIN value of the input
        const minLabelText = "Min"; // TODO: (Taiga UI migration) replace with the required label
        if (currentValue === maxValue) return maxLabelText;
        if (currentValue === minValue) return minLabelText;
        return String(currentValue);
    }

    tuiMigrationInputRangeMinLabel(context: TuiContextWithImplicit<number>): string {
        const currentValue = context.$implicit;
        const minValue = 0; // TODO: (Taiga UI migration) replace with the MIN value of the input-range
        const minLabelText = "Min"; // TODO: (Taiga UI migration) replace with the required label
        if (currentValue === minValue) return minLabelText;
        return String(currentValue);
    }

    tuiMigrationInputRangeMaxLabel(context: TuiContextWithImplicit<number>): string {
        const currentValue = context.$implicit;
        const maxValue = 100; // TODO: (Taiga UI migration) replace with the MAX value of the input
        const maxLabelText = "Max"; // TODO: (Taiga UI migration) replace with the required label
        if (currentValue === maxValue) return maxLabelText;
        return String(currentValue);
    }
}
`;

const FILE_HTML_CHILD_TEMPLATE_BEFORE = `
<tui-input-slider
    tuiHintContent="Select the answer to see how the right custom content changes"
    maxLabel="MAX(string property)"
    minLabel="MIN(string property)"
    class="control"
    [min]="0"
    [max]="10"
    [secondary]="userAnswer === 4 ? 'right' : 'wrong'"
    [pluralize]="pluralForms"
    [segmentsPluralize]="pluralForms"
    [(ngModel)]="userAnswer"
>
    2+2=?
</tui-input-slider>

<tui-input-range
    new
    [min]="0"
    [max]="100"
    [segments]="5"
    [steps]="5"
    [size]="size"
    [maxLabel]="Maxxxxx"
    minLabel="min!!!"
    [formControl]="control"
    [segmentsPluralize]="someVariable"
>
    Select volume range
</tui-input-range>

<tui-slider [min]="100" [max]="1000" size="m" [segments]="5" [quantum]="0.01"></tui-slider>
`;

const FILE_HTML_CHILD_TEMPLATE_AFTER = `
<!-- TODO: (Taiga UI migration) [pluralize] => Use [postfix] instead. See https://taiga-ui.dev/components/input-slider/API?postfix=apples -->
<!-- TODO: (Taiga UI migration) See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/input-slider#slider-segments -->
<tui-input-slider
    tuiHintContent="Select the answer to see how the right custom content changes"
    [valueContent]="tuiMigrationMinMaxLabel"
    ${''}
    class="control"
    [min]="0"
    [max]="10"
    [tuiTextfieldCustomContent]="userAnswer === 4 ? 'right' : 'wrong'"
    [pluralize]="pluralForms"
    [segmentsPluralize]="pluralForms"
    [(ngModel)]="userAnswer"
>
    2+2=?
</tui-input-slider>

<!-- TODO: (Taiga UI migration) See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/input-range#segments -->
<tui-input-range
        [min]="0"
    [max]="100"
    [segments]="5"
    [steps]="5"
    [tuiTextfieldSize]="size"
    [rightValueContent]="tuiMigrationInputRangeMaxLabel"
    [leftValueContent]="tuiMigrationInputRangeMinLabel"
    [formControl]="control"
    [segmentsPluralize]="someVariable"
>
    Select volume range
</tui-input-range>

<input tuiSlider type="range" [min]="100" [max]="1000" size="m" [segments]="5" [step]="0.01"></input>
`;

const FILE_HTML_CHILD_MODULE_BEFORE = `
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {TuiMediaExample1} from './examples/1';
import {FileHtmlChildComponent} from './file-html-child.component';
import {ExampleTuiMediaComponent} from './media.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiSliderModule,
        TuiLinkModule,
    ],
    declarations: [
        ExampleTuiMediaComponent,
        FileHtmlChildComponent,
        TuiMediaExample1,
    ],
    exports: [ExampleTuiMediaComponent],
})
export class ExampleTuiMediaModule {}
`;

const FILE_HTML_CHILD_MODULE_AFTER = `
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { TuiButtonModule, TuiLinkModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {TuiMediaExample1} from './examples/1';
import {FileHtmlChildComponent} from './file-html-child.component';
import {ExampleTuiMediaComponent} from './media.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiSliderModule,
        TuiLinkModule,
        TuiTextfieldControllerModule
    ],
    declarations: [
        ExampleTuiMediaComponent,
        FileHtmlChildComponent,
        TuiMediaExample1,
    ],
    exports: [ExampleTuiMediaComponent],
})
export class ExampleTuiMediaModule {}
`;

const DUMMY_MODULE = `
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {TuiSliderModule} from '@taiga-ui/kit';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';

import {HomeComponent} from './home.component';

@NgModule({
    imports: [RouterModule, TuiDocCodeModule, TuiSliderModule, TuiNotificationModule, TuiLinkModule],
    entryComponents: [HomeComponent],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
`;

/** ___test/inline-html-child/*___ */

const INLINE_HTML_CHILD_MODULE_BEFORE = `
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHintModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {InlineHtmlChildComponent} from './inline-html-child.component';

@NgModule({
    imports: [FormsModule, TuiSliderModule, TuiHintModule],
    declarations: [InlineHtmlChildComponent]
})
export class ChildModule {}
`;

const INLINE_HTML_CHILD_MODULE_AFTER = `
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {InlineHtmlChildComponent} from './inline-html-child.component';

@NgModule({
    imports: [FormsModule, TuiSliderModule, TuiHintModule, TuiTextfieldControllerModule],
    declarations: [InlineHtmlChildComponent]
})
export class ChildModule {}
`;

const INLINE_HTML_CHILD_COMPONENT_BEFORE = `
@Component({
    selector: 'inline-html-child',
    template: '<tui-input-slider new secondary="123" size="m" [maxLabel]="maxLabel"></tui-input-slider>'
})
export class InlineHtmlChildComponent {
    readonly maxLabel = 'MAX (property binding)';
}
`;

const INLINE_HTML_CHILD_COMPONENT_AFTER = `import { TuiContextWithImplicit } from "@taiga-ui/cdk";

@Component({
    selector: 'inline-html-child',
    template: '<tui-input-slider tuiTextfieldCustomContent="123" tuiTextfieldSize="m" [valueContent]="tuiMigrationMinMaxLabel"></tui-input-slider>'
})
export class InlineHtmlChildComponent {
    readonly maxLabel = 'MAX (property binding)';

    tuiMigrationMinMaxLabel(context: TuiContextWithImplicit<number>): string {
        const currentValue = context.$implicit;
        const maxValue = 100; // TODO: (Taiga UI migration) replace with the MAX value of the input
        const maxLabelText = "Max"; // TODO: (Taiga UI migration) replace with the required label
        const minValue = 0; // TODO: (Taiga UI migration) replace with the MIN value of the input
        const minLabelText = "Min"; // TODO: (Taiga UI migration) replace with the required label
        if (currentValue === maxValue) return maxLabelText;
        if (currentValue === minValue) return minLabelText;
        return String(currentValue);
    }
}
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

    describe('no deprecations inside AppComponent', () => {
        it('no imports of the new module inside app.module.ts', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(tree.readContent('test/app/app.module.ts')).toBe(APP_MODULE);
        });

        it('no changes in app.template.ts', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(tree.readContent('test/app/app.template.html')).toBe(APP_TEMPLATE);
        });

        it('no changes in app.component.ts', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(tree.readContent('test/app/app.component.ts')).toBe(APP_COMPONENT);
        });
    });

    describe('component with a inline html template', () => {
        it('adds TuiTextfieldControllerModule to the required module', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(
                tree.readContent('test/inline-html-child/inline-html-child.module.ts'),
            ).toBe(INLINE_HTML_CHILD_MODULE_AFTER);
        });

        it('replace deprecated attributes inside inline template (+ adds required class-methods)', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(
                tree.readContent('test/inline-html-child/inline-html-child.component.ts'),
            ).toEqual(INLINE_HTML_CHILD_COMPONENT_AFTER);
        });
    });

    describe('component with a separate html-file template', () => {
        it('replace deprecated attributes inside templates', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(
                tree.readContent('test/file-html-child/file-html-child.template.html'),
            ).toEqual(FILE_HTML_CHILD_TEMPLATE_AFTER);
        });

        it('adds required properties inside file-html-child.component.ts', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(
                tree.readContent('test/file-html-child/file-html-child.component.ts'),
            ).toBe(FILE_HTML_CHILD_COMPONENT_AFTER);
        });

        it('adds TuiTextfieldControllerModule to the required module', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(
                tree.readContent('test/file-html-child/file-html-child.module.ts'),
            ).toBe(FILE_HTML_CHILD_MODULE_AFTER);
        });

        it('does not add any imports in dummy.module.ts', async () => {
            const tree = await runner
                .runSchematicAsync('updateToV3', {}, host)
                .toPromise();

            expect(tree.readContent('test/file-html-child/dummy.module.ts')).toBe(
                DUMMY_MODULE,
            );
        });
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.module.ts', APP_MODULE);

    createSourceFile('test/app/app.component.ts', APP_COMPONENT);

    createSourceFile('test/app/app.template.html', APP_TEMPLATE);

    createSourceFile('test/file-html-child/dummy.module.ts', DUMMY_MODULE);
    createSourceFile(
        'test/file-html-child/file-html-child.module.ts',
        FILE_HTML_CHILD_MODULE_BEFORE,
    );
    createSourceFile(
        'test/file-html-child/file-html-child.component.ts',
        FILE_HTML_CHILD_COMPONENT_BEFORE,
    );
    createSourceFile(
        'test/file-html-child/file-html-child.template.html',
        FILE_HTML_CHILD_TEMPLATE_BEFORE,
    );

    createSourceFile(
        'test/inline-html-child/inline-html-child.module.ts',
        INLINE_HTML_CHILD_MODULE_BEFORE,
    );
    createSourceFile(
        'test/inline-html-child/inline-html-child.component.ts',
        INLINE_HTML_CHILD_COMPONENT_BEFORE,
    );
}
