import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHintModule} from '@taiga-ui/core';

import {TuiPaletteComponent} from './palette.component';

@NgModule({
    imports: [CommonModule, TuiHintModule],
    declarations: [TuiPaletteComponent],
    exports: [TuiPaletteComponent],
})
export class TuiPaletteModule {}
