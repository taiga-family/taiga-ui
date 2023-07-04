import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiScrollControlsModule} from '@taiga-ui/core';

import {TuiHorizontalStuckScrollbarComponent} from './horizontal-stuck-scrollbar.component';

@NgModule({
    declarations: [TuiHorizontalStuckScrollbarComponent],
    exports: [TuiHorizontalStuckScrollbarComponent],
    imports: [CommonModule, TuiScrollControlsModule],
})
export class TuiHorizontalStuckScrollbarModule {}
