import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiSensitiveComponent} from './sensitive.component';
import {TuiSensitiveDirective} from './sensitive.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiSensitiveComponent, TuiSensitiveDirective],
    exports: [TuiSensitiveComponent, TuiSensitiveDirective],
})
export class TuiSensitiveModule {}
