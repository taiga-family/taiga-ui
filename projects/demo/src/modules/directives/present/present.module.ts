import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiHoveredModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiBadgeModule, TuiPresentModule} from '@taiga-ui/kit';
import {TuiPresentExample1} from './examples/1';
import {ExampleTuiPresentComponent} from './present.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetModule,
        TuiPresentModule,
        TuiHoveredModule,
        TuiBadgeModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiPresentComponent)),
    ],
    declarations: [ExampleTuiPresentComponent, TuiPresentExample1],
    exports: [ExampleTuiPresentComponent],
})
export class ExampleTuiPresentModule {}
