import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiBadgeComponent} from './badge.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiBadgeComponent],
    exports: [TuiBadgeComponent],
})
export class TuiBadgeModule {}
