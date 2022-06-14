import {NgModule} from '@angular/core';

import {TuiPdfFallbackDirective} from './pdf-fallback.directive';

@NgModule({
    declarations: [TuiPdfFallbackDirective],
    exports: [TuiPdfFallbackDirective],
})
export class TuiPdfFallbackModule {}
