import {NgModule} from '@angular/core';
import {TuiZoomDirective} from './zoom.directive';

/**
 * @experimental
 */
@NgModule({
    declarations: [TuiZoomDirective],
    exports: [TuiZoomDirective],
})
export class TuiZoomModule {}
