import {NgModule} from '@angular/core';

import {TuiForDirective} from './for.directive';

@NgModule({
    declarations: [TuiForDirective],
    exports: [TuiForDirective],
})
export class TuiForModule {}
