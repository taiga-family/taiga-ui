import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule, TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiTabDirective} from './tab.directive';
import {TuiTabComponent} from './tab/tab.component';
import {TuiTabsWithMoreComponent} from './tabs-with-more/tabs-with-more.component';
import {TuiTabsComponent} from './tabs/tabs.component';
import {TuiUnderlineComponent} from './underline/underline.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiSvgModule,
        TuiFocusableModule,
        PolymorpheusModule,
    ],
    declarations: [
        TuiTabsWithMoreComponent,
        TuiTabsComponent,
        TuiTabComponent,
        TuiUnderlineComponent,
        TuiTabDirective,
    ],
    exports: [
        TuiTabsWithMoreComponent,
        TuiTabsComponent,
        TuiTabComponent,
        TuiTabDirective,
    ],
})
export class TuiTabsModule {}
