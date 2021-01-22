import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';
import {TuiSidebarExample1} from './examples/1';
import {ExampleTuiSidebarComponent} from './sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSidebarModule,
        TuiActiveZoneModule,
        TuiButtonModule,
        TuiAccordionModule,
        TuiLinkModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiSidebarComponent)),
    ],
    declarations: [ExampleTuiSidebarComponent, TuiSidebarExample1],
    exports: [ExampleTuiSidebarComponent],
})
export class ExampleTuiSidebarModule {}
