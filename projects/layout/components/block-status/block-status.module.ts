import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItemModule} from '@taiga-ui/cdk';

import {TuiBlockStatusComponent} from './block-status.component';

@NgModule({
    imports: [CommonModule, TuiItemModule],
    declarations: [TuiBlockStatusComponent],
    exports: [TuiBlockStatusComponent, TuiItemModule],
})
export class TuiBlockStatusModule {}
