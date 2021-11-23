import {NgModule} from '@angular/core';

import {TuiLetDirective} from './let.directive';

@NgModule({
    declarations: [TuiLetDirective],
    exports: [TuiLetDirective],
})
export class TuiLetModule {}
