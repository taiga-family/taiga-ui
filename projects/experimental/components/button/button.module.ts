import {NgModule} from '@angular/core';

import {TuiButtonComponent} from './button.component';
import {TuiButtonDirective} from './button.directive';

@NgModule({
    declarations: [TuiButtonDirective, TuiButtonComponent],
    exports: [TuiButtonDirective],
})
export class TuiButtonModule {}
