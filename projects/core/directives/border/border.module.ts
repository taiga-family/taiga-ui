import {NgModule} from '@angular/core';

import {TuiBorderDirective} from './border.directive';

@NgModule({
    declarations: [TuiBorderDirective],
    exports: [TuiBorderDirective],
})
export class TuiBorderModule {}
