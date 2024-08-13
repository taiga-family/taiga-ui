import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHint} from '@taiga-ui/core/directives/hint';

import {TuiPaletteComponent} from './palette.component';

@NgModule({
    imports: [CommonModule, ...TuiHint],
    declarations: [TuiPaletteComponent],
    exports: [TuiPaletteComponent, ...TuiHint],
})
export class TuiPaletteModule {}
