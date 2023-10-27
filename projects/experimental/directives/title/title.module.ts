import {NgModule} from '@angular/core';

import {TuiTitleComponent} from './title.component';
import {TuiTitleDirective} from './title.directive';

@NgModule({
    declarations: [TuiTitleDirective, TuiTitleComponent],
    exports: [TuiTitleDirective],
})
export class TuiTitleModule {}
