import {NgModule} from '@angular/core';

import {TuiNumberFormatDirective} from './number-format.directive';

@NgModule({
    declarations: [TuiNumberFormatDirective],
    exports: [TuiNumberFormatDirective],
})
export class TuiNumberFormatModule {}
