import {NgModule} from '@angular/core';

import {TuiAutoFocusDirective} from './autofocus.directive';

@NgModule({
    declarations: [TuiAutoFocusDirective],
    exports: [TuiAutoFocusDirective],
})
export class TuiAutoFocusModule {}
