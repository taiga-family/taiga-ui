import {NgModule} from '@angular/core';

import {TuiCopyProcessorDirective} from './copy-processor.directive';

@NgModule({
    declarations: [TuiCopyProcessorDirective],
    exports: [TuiCopyProcessorDirective],
})
export class TuiCopyProcessorModule {}
