import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiReplacePipeModule} from '@taiga-ui/cdk';
import {TuiTabsModule, TuiTagModule} from '@taiga-ui/kit';

import {TuiDocSeeAlsoModule} from '../internal/see-also/see-also.module';
import {TuiDocSourceCodeModule} from '../internal/source-code/source-code.module';
import {TuiDocPageComponent} from './page.component';
import {TuiDocPageTabConnectorDirective} from './page-tab.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiDocSeeAlsoModule,
        TuiTabsModule,
        TuiTagModule,
        TuiDocSourceCodeModule,
        TuiReplacePipeModule,
    ],
    declarations: [TuiDocPageComponent, TuiDocPageTabConnectorDirective],
    exports: [TuiDocPageComponent, TuiDocPageTabConnectorDirective],
})
export class TuiDocPageModule {}
