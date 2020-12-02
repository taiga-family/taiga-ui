import {NgModule} from '@angular/core';
import {TuiDescribedByDirective} from './described-by.directive';

@NgModule({
    declarations: [TuiDescribedByDirective],
    exports: [TuiDescribedByDirective],
})
export class TuiDescribedByModule {}
