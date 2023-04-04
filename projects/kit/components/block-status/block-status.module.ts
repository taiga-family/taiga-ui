import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiBlockStatusComponent} from './block-status.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiBlockStatusComponent],
    exports: [TuiBlockStatusComponent],
})
export class TuiBlockStatusModule {}
