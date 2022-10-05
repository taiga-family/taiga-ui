import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';

import {TuiBadgeComponent} from './badge.component';

@NgModule({
    imports: [CommonModule, TuiResizeModule],
    declarations: [TuiBadgeComponent],
    exports: [TuiBadgeComponent],
})
export class TuiBadgeModule {}
