import {NgModule} from '@angular/core';

import {TuiPreventDefaultDirective} from './prevent-default.directive';

@NgModule({
    declarations: [TuiPreventDefaultDirective],
    exports: [TuiPreventDefaultDirective],
})
export class TuiPreventDefaultModule {}
