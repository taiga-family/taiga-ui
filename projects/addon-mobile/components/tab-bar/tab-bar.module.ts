import {NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';

import {TuiTabBarComponent} from './tab-bar.component';
import {TuiTabBarItemComponent} from './tab-bar-item.component';
import {TuiTabBarItemDirective} from './tab-bar-item.directive';

@NgModule({
    imports: [TuiIcon, NgIf, TuiRepeatTimes],
    declarations: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
    exports: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
})
export class TuiTabBar {}
