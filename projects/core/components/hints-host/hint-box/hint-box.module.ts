import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiHintBoxComponent} from './hint-box.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiHintBoxComponent],
    exports: [TuiHintBoxComponent],
})
export class TuiHintBoxModule {}
