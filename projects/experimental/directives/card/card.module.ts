import {NgModule} from '@angular/core';

import {TuiCardComponent} from './card.component';
import {TuiCardLargeDirective, TuiCardMediumDirective} from './card.directive';

@NgModule({
    declarations: [TuiCardComponent, TuiCardLargeDirective, TuiCardMediumDirective],
    exports: [TuiCardLargeDirective, TuiCardMediumDirective],
})
export class TuiCardModule {}
