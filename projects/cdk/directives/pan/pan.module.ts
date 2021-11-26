import {NgModule} from '@angular/core';

import {TuiPanDirective} from './pan.directive';

/**
 * @experimental
 */
@NgModule({
    declarations: [TuiPanDirective],
    exports: [TuiPanDirective],
})
export class TuiPanModule {}
