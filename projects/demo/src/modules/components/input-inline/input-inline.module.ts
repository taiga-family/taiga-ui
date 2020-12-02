import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputInlineModule} from '@taiga-ui/kit';
import {TuiInputInlineExample1} from './examples/1/component';
import {TuiInputInlineExample2} from './examples/2/component';
import {ExampleTuiInputInlineComponent} from './input-inline.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiInputInlineModule,
        TuiAutoFocusModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiInputInlineComponent)),
    ],
    declarations: [
        ExampleTuiInputInlineComponent,
        TuiInputInlineExample1,
        TuiInputInlineExample2,
    ],
    exports: [ExampleTuiInputInlineComponent],
})
export class ExampleTuiInputInlineModule {}
