import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiCopyProcessorDirective} from './copy-processor.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiCopyProcessorDirective],
    exports: [TuiCopyProcessorDirective],
})
export class TuiCopyProcessorModule {}
