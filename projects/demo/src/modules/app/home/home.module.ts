import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiIconModule} from '@taiga-ui/experimental';
import {TuiAccordionModule, TuiTabsModule} from '@taiga-ui/kit';

import {HomeComponent} from './home.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiDocCodeModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiAccordionModule,
        TuiTabsModule,
        TuiIconModule,
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
