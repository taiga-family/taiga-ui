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

<tui-input-slider [max]="100" [(ngModel)]="value" [min]="0">
    Usage of the component without deprecated props
</tui-input-slider>

<file-html-child></file-html-child>
<footer>123</footer>
`;

/** ___test/file-html-child/*___ */

const FILE_HTML_CHILD_COMPONENT = `
@Component({
    selector: 'file-html-child',
    templateUrl: './file-html-child.template.html'
})
export class FileHtmlChildComponent {}
`;

const FILE_HTML_CHILD_TEMPLATE_BEFORE = `
<tui-input-slider
    tuiHintContent="Select the answer to see how the right custom content changes"
    class="control"
    [min]="0"
    [max]="10"
    [secondary]="userAnswer === 4 ? 'right' : 'wrong'"
    [(ngModel)]="userAnswer"
>
    2+2=?
</tui-input-slider>
`;

const FILE_HTML_CHILD_TEMPLATE_AFTER = `
<tui-input-slider
    tuiHintContent="Select the answer to see how the right custom content changes"
    class="control"
    [min]="0"
    [max]="10"
    [tuiTextfieldCustomContent]="userAnswer === 4 ? 'right' : 'wrong'"
    [(ngModel)]="userAnswer"
>
    2+2=?
</tui-input-slider>
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
    template: '<tui-input-slider secondary="123"></tui-input-slider>'
})
export class InlineHtmlChildComponent {}
`;

const INLINE_HTML_CHILD_COMPONENT_AFTER = `
@Component({
    selector: 'inline-html-child',
    template: '<tui-input-slider tuiTextfieldCustomContent="123"></tui-input-slider>'
})
export class InlineHtmlChildComponent {}
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

        it('replace deprecated attributes inside inline template', async () => {
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
        FILE_HTML_CHILD_COMPONENT,
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
