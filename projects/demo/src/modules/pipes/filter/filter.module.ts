import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiFilterPipeModule} from '@taiga-ui/cdk';
import {ExampleTuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        TuiFilterPipeModule,
        TuiMoneyModule,
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiFilterComponent)),
    ],
    declarations: [ExampleTuiFilterComponent],
    exports: [ExampleTuiFilterComponent],
})
export class ExampleTuiFilterModule {}
