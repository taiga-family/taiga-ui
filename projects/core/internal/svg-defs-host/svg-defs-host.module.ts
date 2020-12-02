import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiSvgDefsHostComponent} from './svg-defs-host.component';

@NgModule({
    imports: [CommonModule, TuiLetModule],
    declarations: [TuiSvgDefsHostComponent],
    exports: [TuiSvgDefsHostComponent],
})
export class TuiSvgDefsHostModule {}
