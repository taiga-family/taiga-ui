import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiButtonCloseDirective} from './button-close.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiButtonCloseDirective],
    exports: [TuiButtonCloseDirective],
})
export class TuiButtonCloseModule {}
