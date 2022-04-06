import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk/pipes';

import {TuiAlertHostComponent} from './alert-host.component';

@NgModule({
    imports: [CommonModule, TuiMapperPipeModule],
    declarations: [TuiAlertHostComponent],
    exports: [TuiAlertHostComponent],
})
export class TuiAlertHostModule {}
