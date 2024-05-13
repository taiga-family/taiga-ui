import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMaskAccessorModule} from '@taiga-ui/core';

import {TuiInputInlineComponent} from './input-inline.component';

@NgModule({
    imports: [CommonModule, FormsModule, TuiMaskAccessorModule],
    declarations: [TuiInputInlineComponent],
    exports: [TuiInputInlineComponent],
})
export class TuiInputInlineModule {}
