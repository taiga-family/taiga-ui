import {NgModule} from '@angular/core';
import {TuiHintDirective} from './hint.directive';

@NgModule({
    declarations: [TuiHintDirective],
    exports: [TuiHintDirective],
})
export class TuiHintModule {}
