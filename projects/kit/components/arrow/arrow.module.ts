import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiArrowComponent} from './arrow.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiArrowComponent],
    exports: [TuiArrowComponent],
    entryComponents: [TuiArrowComponent],
})
export class TuiArrowModule {}
