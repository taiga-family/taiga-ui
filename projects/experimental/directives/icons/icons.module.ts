import {NgModule} from '@angular/core';

import {TuiIconsComponent} from './icons.component';
import {TuiIconsDirective} from './icons.directive';

@NgModule({
    declarations: [TuiIconsComponent, TuiIconsDirective],
    exports: [TuiIconsDirective],
})
export class TuiIconsModule {}
