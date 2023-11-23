import {NgModule} from '@angular/core';

import {TuiCardComponent} from './card.component';
import {TuiCardDirective} from './card.directive';

@NgModule({
    declarations: [TuiCardComponent, TuiCardDirective],
    exports: [TuiCardDirective],
})
export class TuiCardModule {}
