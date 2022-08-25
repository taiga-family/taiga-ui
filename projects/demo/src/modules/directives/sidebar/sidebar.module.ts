import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule, TuiGroupModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAccordionModule, TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarExample1} from './examples/1';
import {TuiSidebarExample2} from './examples/2';
import {MySidebarModule} from './examples/2/sidebar/my-sidebar.module';
import {ExampleTuiSidebarComponent} from './sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSidebarModule,
        TuiActiveZoneModule,
        TuiButtonModule,
        TuiAccordionModule,
        TuiLinkModule,
        MySidebarModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSidebarComponent)),
        PolymorpheusModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiDataListWrapperModule,
        TuiGroupModule,
    ],
    declarations: [ExampleTuiSidebarComponent, TuiSidebarExample1, TuiSidebarExample2],
    exports: [ExampleTuiSidebarComponent],
})
export class ExampleTuiSidebarModule {}
