import {NgModule} from '@angular/core';
import {TuiValueAccessorDirective} from './value-accessor.directive';

@NgModule({
    declarations: [TuiValueAccessorDirective],
    exports: [TuiValueAccessorDirective],
})
export class TuiValueAccessorModule {}
