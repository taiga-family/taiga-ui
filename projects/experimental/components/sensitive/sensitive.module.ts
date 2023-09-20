import {NgModule} from '@angular/core';

import {TuiSensitiveDirective} from './sensitive.directive';

@NgModule({
    declarations: [TuiSensitiveDirective],
    exports: [TuiSensitiveDirective],
})
export class TuiSensitiveModule {}
