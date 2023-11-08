import {NgModule} from '@angular/core';

import {TuiForAsyncDirective} from './for-async.directive';

/**
 * @deprecated:
 * remove in v4.0
 */
@NgModule({
    declarations: [TuiForAsyncDirective],
    exports: [TuiForAsyncDirective],
})
export class TuiForAsyncModule {}
