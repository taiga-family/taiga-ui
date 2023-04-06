import {NgModule} from '@angular/core';

import {TuiValueChangesDirective} from './value-changes.directive';

@NgModule({
    declarations: [TuiValueChangesDirective],
    exports: [TuiValueChangesDirective],
})
export class TuiValueChangesModule {}
