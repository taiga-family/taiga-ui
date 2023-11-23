import {NgModule} from '@angular/core';

import {TuiSensitiveComponent} from './sensitive.component';
import {TuiSensitiveDirective} from './sensitive.directive';

@NgModule({
    declarations: [TuiSensitiveDirective, TuiSensitiveComponent],
    exports: [TuiSensitiveDirective],
})
export class TuiSensitiveModule {}
