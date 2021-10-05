import {NgModule} from '@angular/core';
import {TuiTouchableDirective} from './touchable.directive';

@NgModule({
    declarations: [TuiTouchableDirective],
    exports: [TuiTouchableDirective],
})
export class TuiTouchableModule {}
