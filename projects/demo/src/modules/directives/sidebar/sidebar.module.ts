import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLinkModule, TuiLoaderModule} from '@taiga-ui/core';
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
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSidebarComponent)),
        TuiLoaderModule,
        TuiLetModule,
    ],
    declarations: [ExampleTuiSidebarComponent, TuiSidebarExample1],
    exports: [ExampleTuiSidebarComponent],
})
export class ExampleTuiSidebarModule {}
