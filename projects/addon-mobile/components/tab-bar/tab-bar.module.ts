import {NgModule} from '@angular/core';

import {TuiTabBarComponent} from './tab-bar.component';
import {TuiTabBarItemComponent} from './tab-bar-item.component';
import {TuiTabBarItemDirective} from './tab-bar-item.directive';

@NgModule({
    imports: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
    exports: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
})
export class TuiTabBar {}
