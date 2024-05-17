import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiCheckboxComponent, TuiInputTagModule} from '@taiga-ui/kit';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiTablesExample1} from './examples/1';
import {TablesComponent} from './tables.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiCheckboxComponent,
        TuiInputTagModule,
        TuiSvgComponent,
        TuiNotificationComponent,
        TuiAddonDocModule,
        TuiLinkDirective,
        StylesInfoModule,
        RouterModule.forChild(tuiGenerateRoutes(TablesComponent)),
    ],
    declarations: [TablesComponent, TuiTablesExample1],
    exports: [TablesComponent],
})
export class TablesModule {}
