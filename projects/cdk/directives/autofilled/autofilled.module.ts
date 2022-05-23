import {NgModule} from '@angular/core';

import {TuiAutofilledDirective} from './autofilled.directive';
import {TuiAutofilledStyleComponent} from './autofilled-style.component';

@NgModule({
    exports: [TuiAutofilledDirective],
    entryComponents: [TuiAutofilledStyleComponent],
    declarations: [TuiAutofilledDirective, TuiAutofilledStyleComponent],
})
export class TuiAutofilledModule {}
