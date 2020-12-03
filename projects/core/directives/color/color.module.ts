import {NgModule} from '@angular/core';
import {TuiColorDirective} from './color.directive';

// TODO: Consider removing
@NgModule({
    declarations: [TuiColorDirective],
    exports: [TuiColorDirective],
})
export class TuiColorModule {}
