import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiActionModule} from '@taiga-ui/kit';
import {ExampleTuiActionComponent} from './action.component';
import {TuiActionExample1} from './examples/1';
import {TuiActionExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiActionModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiActionComponent)),
    ],
    declarations: [ExampleTuiActionComponent, TuiActionExample1, TuiActionExample2],
    exports: [ExampleTuiActionComponent],
})
export class ExampleTuiActionModule {}
