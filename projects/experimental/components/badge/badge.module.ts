import {NgModule} from '@angular/core';
import {TuiIconsDirective, TuiIconsModule} from '@taiga-ui/experimental/directives/icons';

import {TuiBadgeComponent} from './badge.component';
import {TuiBadgeDirective} from './badge.directive';

@NgModule({
    imports: [TuiIconsModule],
    declarations: [TuiBadgeComponent, TuiBadgeDirective],
    exports: [TuiBadgeDirective, TuiIconsDirective],
})
export class TuiBadgeModule {}
