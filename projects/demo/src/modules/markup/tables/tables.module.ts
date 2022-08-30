import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiCheckboxModule, TuiInputTagModule, TuiTagModule} from '@taiga-ui/kit';

import {TuiTablesExample1} from './examples/1';
import {TablesComponent} from './tables.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiCheckboxModule,
        TuiInputTagModule,
        TuiSvgModule,
        TuiTagModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(tuiGenerateRoutes(TablesComponent)),
    ],
    declarations: [TablesComponent, TuiTablesExample1],
    exports: [TablesComponent],
})
export class TablesModule {}
