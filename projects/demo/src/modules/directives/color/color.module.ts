import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiColorModule} from '@taiga-ui/core';
import {ExampleTuiColorComponent} from './color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiColorModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiColorComponent)),
    ],
    declarations: [ExampleTuiColorComponent],
    exports: [ExampleTuiColorComponent],
})
export class ExampleTuiColorModule {}
