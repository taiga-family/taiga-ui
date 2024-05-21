import {NgModule} from '@angular/core';

import {TuiExpandComponent} from './expand.component';
import {TuiExpandContentDirective} from './expand-content.directive';

@NgModule({
    imports: [TuiExpandComponent, TuiExpandContentDirective],
    exports: [TuiExpandComponent, TuiExpandContentDirective],
})
export class TuiExpand {}
