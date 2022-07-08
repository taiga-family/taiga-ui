import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule, TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTabComponent} from './tab/tab.component';
import {TuiTabsComponent} from './tabs/tabs.component';
import {TuiTabsWithMoreComponent} from './tabs-with-more/tabs-with-more.component';
import {TuiUnderlineComponent} from './underline/underline.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiSvgModule,
        TuiFocusableModule,
        PolymorpheusModule,
        TuiItemModule,
    ],
    declarations: [
        TuiTabsWithMoreComponent,
        TuiTabsComponent,
        TuiTabComponent,
        TuiUnderlineComponent,
    ],
    exports: [
        TuiTabsWithMoreComponent,
        TuiTabsComponent,
        TuiTabComponent,
        TuiItemDirective,
    ],
})
export class TuiTabsModule {}
