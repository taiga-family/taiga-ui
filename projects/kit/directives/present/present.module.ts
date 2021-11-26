import {NgModule} from '@angular/core';

import {TuiPresentDirective} from './present.directive';

@NgModule({
    declarations: [TuiPresentDirective],
    exports: [TuiPresentDirective],
})
export class TuiPresentModule {}
