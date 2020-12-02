import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiSvgModule} from '@taiga-ui/core';
import {ExampleTuiSvgComponent} from './svg.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiSvgComponent)),
    ],
    declarations: [ExampleTuiSvgComponent],
    exports: [ExampleTuiSvgComponent],
})
export class ExampleTuiSvgModule {}
