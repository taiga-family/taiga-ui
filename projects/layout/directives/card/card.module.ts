import {NgModule} from '@angular/core';

import {TuiCardLargeDirective, TuiCardMediumDirective} from './card.directive';

@NgModule({
    imports: [TuiCardLargeDirective, TuiCardMediumDirective],
    exports: [TuiCardLargeDirective, TuiCardMediumDirective],
})
export class TuiCardModule {}
