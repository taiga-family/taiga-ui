import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';
import {TuiFadeModule} from '@taiga-ui/experimental/components/fade';

import {TuiBadgeComponent} from './badge.component';

@NgModule({
    imports: [CommonModule, TuiFadeModule, TuiResizeModule],
    declarations: [TuiBadgeComponent],
    exports: [TuiBadgeComponent],
})
export class TuiBadgeModule {}
