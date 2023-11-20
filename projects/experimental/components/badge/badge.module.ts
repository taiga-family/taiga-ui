import {NgModule} from '@angular/core';

import {TuiBadgeComponent} from './badge.component';
import {TuiBadgeDirective} from './badge.directive';

@NgModule({
    declarations: [TuiBadgeComponent, TuiBadgeDirective],
    exports: [TuiBadgeDirective],
})
export class TuiBadgeModule {}
