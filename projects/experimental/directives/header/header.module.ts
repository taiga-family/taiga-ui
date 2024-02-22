import {NgModule} from '@angular/core';

import {TuiHeaderStylesComponent} from './header.component';
import {TuiHeaderDirective} from './header.directive';

@NgModule({
    declarations: [TuiHeaderStylesComponent, TuiHeaderDirective],
    exports: [TuiHeaderDirective],
})
export class TuiHeaderModule {}
