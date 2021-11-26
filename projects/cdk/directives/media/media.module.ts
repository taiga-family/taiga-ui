import {NgModule} from '@angular/core';

import {TuiMediaDirective} from './media.directive';

@NgModule({
    declarations: [TuiMediaDirective],
    exports: [TuiMediaDirective],
})
export class TuiMediaModule {}
