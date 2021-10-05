import {NgModule} from '@angular/core';
import {TuiUnfinishedValidatorDirective} from './unfinished-validator.directive';

@NgModule({
    declarations: [TuiUnfinishedValidatorDirective],
    exports: [TuiUnfinishedValidatorDirective],
})
export class TuiUnfinishedValidatorModule {}
