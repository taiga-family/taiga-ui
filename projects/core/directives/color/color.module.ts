import {NgModule} from '@angular/core';
import {TuiColorDirective} from './color.directive';

@NgModule({
    declarations: [TuiColorDirective],
    exports: [TuiColorDirective],
})
export class TuiColorModule {}
