import {NgModule} from '@angular/core';

import {TuiRadioComponent} from './radio.component';
import {TuiRadioDirective} from './radio.directive';

@NgModule({
    declarations: [TuiRadioComponent, TuiRadioDirective],
    exports: [TuiRadioComponent, TuiRadioDirective],
})
export class TuiRadio {}
