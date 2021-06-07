import {NgModule} from '@angular/core';
import {TuiColorDirective} from './color.directive';

/**
 * @deprecated use CSS custom properties
 */
@NgModule({
    declarations: [TuiColorDirective],
    exports: [TuiColorDirective],
})
export class TuiColorModule {}
