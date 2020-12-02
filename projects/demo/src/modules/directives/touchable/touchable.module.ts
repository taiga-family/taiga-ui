import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiTouchableModule} from '@taiga-ui/addon-mobile';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiTouchableExample1} from './examples/1';
import {ExampleTuiTouchableComponent} from './touchable.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiTouchableModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiTouchableComponent)),
    ],
    declarations: [ExampleTuiTouchableComponent, TuiTouchableExample1],
    exports: [ExampleTuiTouchableComponent],
})
export class ExampleTuiTouchableModule {}
