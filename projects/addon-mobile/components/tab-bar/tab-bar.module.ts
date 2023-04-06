import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiTabBarComponent} from './tab-bar.component';
import {TuiTabBarItemComponent} from './tab-bar-item.component';
import {TuiTabBarItemDirective} from './tab-bar-item.directive';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
    exports: [TuiTabBarComponent, TuiTabBarItemComponent, TuiTabBarItemDirective],
})
export class TuiTabBarModule {}
