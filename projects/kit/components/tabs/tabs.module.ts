import {NgModule} from '@angular/core';
import {TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';

import {TuiTabDirective} from './tab.directive';
import {TuiTabsDirective} from './tabs.directive';
import {TuiTabsHorizontalDirective} from './tabs-horizontal.directive';
import {TuiTabsVerticalDirective} from './tabs-vertical.directive';
import {TuiTabsWithMoreComponent} from './tabs-with-more.component';

@NgModule({
    imports: [
        TuiItemModule,
        TuiTabDirective,
        TuiTabsDirective,
        TuiTabsHorizontalDirective,
        TuiTabsVerticalDirective,
        TuiTabsWithMoreComponent,
    ],
    exports: [
        TuiTabsWithMoreComponent,
        TuiTabsHorizontalDirective,
        TuiTabsDirective,
        TuiTabsVerticalDirective,
        TuiTabDirective,
        TuiItemDirective,
    ],
})
export class TuiTabsModule {}
