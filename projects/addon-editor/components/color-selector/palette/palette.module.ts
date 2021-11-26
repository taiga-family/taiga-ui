import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDescribedByModule, TuiHintModule} from '@taiga-ui/core';

import {TuiPaletteComponent} from './palette.component';

@NgModule({
    imports: [CommonModule, TuiHintModule, TuiDescribedByModule],
    declarations: [TuiPaletteComponent],
    exports: [TuiPaletteComponent],
})
export class TuiPaletteModule {}
