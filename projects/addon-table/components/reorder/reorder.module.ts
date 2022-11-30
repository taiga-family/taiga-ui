import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiTilesModule} from '@taiga-ui/kit';

import {TuiReorderComponent} from './reorder.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiButtonModule, TuiTilesModule],
    declarations: [TuiReorderComponent],
    exports: [TuiReorderComponent],
})
export class TuiReorderModule {}
