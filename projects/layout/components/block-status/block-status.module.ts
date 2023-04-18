import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItemModule} from '@taiga-ui/cdk';

import {TuiBlockStatusComponent} from './block-status.component';
import {TuiBlockStatusDirective} from './block-status.directive';

@NgModule({
    imports: [CommonModule, TuiItemModule],
    declarations: [TuiBlockStatusComponent, TuiBlockStatusDirective],
    exports: [TuiBlockStatusComponent, TuiItemModule, TuiBlockStatusDirective],
})
export class TuiBlockStatusModule {}
