import {NgModule} from '@angular/core';

import {TuiSensitiveComponent} from './sensitive.component';
import {TuiSensitiveDirective} from './sensitive.directive';

@NgModule({
    declarations: [TuiSensitiveComponent, TuiSensitiveDirective],
    exports: [TuiSensitiveComponent, TuiSensitiveDirective],
})
export class TuiSensitiveModule {}
