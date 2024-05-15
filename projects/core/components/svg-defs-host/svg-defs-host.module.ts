import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetDirective} from '@taiga-ui/cdk';

import {TuiSvgDefsHostComponent} from './svg-defs-host.component';

@NgModule({
    imports: [CommonModule, TuiLetDirective],
    declarations: [TuiSvgDefsHostComponent],
    exports: [TuiSvgDefsHostComponent],
})
export class TuiSvgDefsHostModule {}
