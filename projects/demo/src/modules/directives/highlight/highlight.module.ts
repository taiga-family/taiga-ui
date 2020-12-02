import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiHighlightModule, TuiInputModule} from '@taiga-ui/kit';
import {TuiHighlightExample1} from './examples/1';
import {ExampleTuiHighlightComponent} from './highlight.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiHighlightModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiHighlightComponent)),
    ],
    declarations: [ExampleTuiHighlightComponent, TuiHighlightExample1],
    exports: [ExampleTuiHighlightComponent],
})
export class ExampleTuiHighlightModule {}
