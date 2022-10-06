import {NgModule} from '@angular/core';

import {TuiMobileTabsComponent} from './mobile-tabs.component';
import {TuiMobileTabsDirective} from './mobile-tabs.directive';

@NgModule({
    declarations: [TuiMobileTabsDirective, TuiMobileTabsComponent],
    exports: [TuiMobileTabsDirective, TuiMobileTabsComponent],
})
export class TuiMobileTabsModule {}
