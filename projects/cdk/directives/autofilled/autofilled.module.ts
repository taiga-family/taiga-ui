import {NgModule} from '@angular/core';

import {TuiAutofilledDirective} from './autofilled.directive';
import {TuiAutofilledStyleComponent} from './autofilled-style.component';

@NgModule({
    declarations: [TuiAutofilledDirective, TuiAutofilledStyleComponent],
    exports: [TuiAutofilledDirective],
})
export class TuiAutofilledModule {}
