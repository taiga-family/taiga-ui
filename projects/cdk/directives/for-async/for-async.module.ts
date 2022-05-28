import {NgModule} from '@angular/core';

import {TuiForAsyncDirective} from './for-async.directive';

/**
 * @experimental
 */
@NgModule({
    declarations: [TuiForAsyncDirective],
    exports: [TuiForAsyncDirective],
})
export class TuiForAsyncModule {}
