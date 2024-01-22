import {NgModule} from '@angular/core';

import {TuiHeaderComponent} from './header.component';
import {TuiHeaderDirective} from './header.directive';

@NgModule({
    declarations: [TuiHeaderComponent, TuiHeaderDirective],
    exports: [TuiHeaderComponent, TuiHeaderDirective],
})
export class TuiHeaderModule {}
