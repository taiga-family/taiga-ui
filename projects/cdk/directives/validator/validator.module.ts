import {NgModule} from '@angular/core';

import {TuiValidatorDirective} from './validator.directive';

@NgModule({
    declarations: [TuiValidatorDirective],
    exports: [TuiValidatorDirective],
})
export class TuiValidatorModule {}
