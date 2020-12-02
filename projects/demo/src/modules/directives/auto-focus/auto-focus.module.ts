import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {ExampleTuiAutoFocusComponent} from './auto-focus.component';
import {TuiAutoFocusExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiAutoFocusModule,
        TuiButtonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiAutoFocusComponent)),
    ],
    declarations: [ExampleTuiAutoFocusComponent, TuiAutoFocusExample1],
    exports: [ExampleTuiAutoFocusComponent],
})
export class ExampleTuiAutoFocusModule {}
