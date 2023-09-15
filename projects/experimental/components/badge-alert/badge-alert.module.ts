import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiBadgeAlertComponent} from './badge-alert.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiBadgeAlertComponent],
    exports: [TuiBadgeAlertComponent],
})
export class TuiBadgeAlertModule {}
