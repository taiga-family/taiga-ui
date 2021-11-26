import {NgModule} from '@angular/core';

import {TuiObscuredDirective} from './obscured.directive';

@NgModule({
    declarations: [TuiObscuredDirective],
    exports: [TuiObscuredDirective],
})
export class TuiObscuredModule {}
