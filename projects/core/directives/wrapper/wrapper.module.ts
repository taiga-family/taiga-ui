import {NgModule} from '@angular/core';

import {TuiWrapperDirective} from './wrapper.directive';

@NgModule({
    declarations: [TuiWrapperDirective],
    exports: [TuiWrapperDirective],
})
export class TuiWrapperModule {}
