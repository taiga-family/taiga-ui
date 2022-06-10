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
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFormatNumberPipeModule,
        TuiSliderModule,
        FormsModule,
    ],
    declarations: [AppComponent]
})
export class AppModule {}
`;

const APP_COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './app.template.html'})
export class AppComponent {}
`;

const APP_HTML_FILE_BEFORE = `
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

const APP_HTML_FILE_AFTER = `
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

const CHILD_MODULE_BEFORE = `
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHintModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {ChildComponent} from './child.component';

@NgModule({imports: [FormsModule, TuiSliderModule, TuiHintModule], declarations: [ChildComponent]})
export class ChildModule {}
`;

const CHILD_MODULE_AFTER = `
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {ChildComponent} from './child.component';

@NgModule({imports: [FormsModule, TuiSliderModule, TuiHintModule, TuiTextfieldControllerModule], declarations: [ChildComponent]})
export class ChildModule {}
`;

const CHILD_COMPONENT_INLINE_HTML_BEFORE = `
@Component({template: '<tui-input-slider secondary="123"></tui-input-slider>'})
export class ChildComponent {}
`;

const CHILD_COMPONENT_INLINE_HTML_AFTER = `
@Component({template: '<tui-input-slider tuiTextfieldCustomContent="123"></tui-input-slider>'})
export class ChildComponent {}
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

    // TODO add test "DOES NOT add TuiTextfieldControllerModule to NO required module" (make app.module in such way)
    it('adds TuiTextfieldControllerModule to required modules', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        // TODO adds another child with not inlined module
        expect(tree.readContent('test/child/child.module.ts')).toBe(CHILD_MODULE_AFTER);
    });

    it('should edit sliders inside html-files', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.template.html')).toEqual(
            APP_HTML_FILE_AFTER,
        );
    });

    it('should edit sliders inline-templates', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/child/child.component.ts')).toEqual(
            CHILD_COMPONENT_INLINE_HTML_AFTER,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.module.ts', APP_MODULE);

    createSourceFile('test/app/app.component.ts', APP_COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile('test/app/app.template.html', APP_HTML_FILE_BEFORE);

    createSourceFile('test/child/child.module.ts', CHILD_MODULE_BEFORE);
    createSourceFile('test/child/child.component.ts', CHILD_COMPONENT_INLINE_HTML_BEFORE);
}
