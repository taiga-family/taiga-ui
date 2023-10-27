import {NgModule} from '@angular/core';

import {TuiCardComponent, TuiCardDirective} from './card.directive';

@NgModule({
    declarations: [TuiCardComponent, TuiCardDirective],
    exports: [TuiCardDirective],
})
export class TuiCardModule {}
