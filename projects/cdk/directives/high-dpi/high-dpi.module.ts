import {NgModule} from '@angular/core';

import {TuiHighDpiDirective} from './high-dpi.directive';

@NgModule({
    declarations: [TuiHighDpiDirective],
    exports: [TuiHighDpiDirective],
})
export class TuiHighDpiModule {}
