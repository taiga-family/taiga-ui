import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule, TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTabComponent} from './tab/tab.component';
import {TuiTabsDirective} from './tabs.directive';
import {TuiTabsComponent} from './tabs/tabs.component';
import {TuiTabsVerticalComponent} from './tabs-vertical/tabs-vertical.component';
import {TuiTabsWithMoreComponent} from './tabs-with-more/tabs-with-more.component';
import {TuiUnderlineComponent} from './underline/underline.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiHostedDropdownModule,
        TuiSvgModule,
        TuiFocusableModule,
        TuiItemModule,
    ],
    declarations: [
        TuiTabsWithMoreComponent,
        TuiTabsComponent,
        TuiTabsDirective,
        TuiTabsVerticalComponent,
        TuiTabComponent,
        TuiUnderlineComponent,
    ],
    exports: [
        TuiTabsWithMoreComponent,
        TuiTabsComponent,
        TuiTabsDirective,
        TuiTabsVerticalComponent,
        TuiTabComponent,
        TuiItemDirective,
    ],
})
export class TuiTabsModule {}
