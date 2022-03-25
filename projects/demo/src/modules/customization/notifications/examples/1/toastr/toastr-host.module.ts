import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ToastrHostComponent} from './toastr-host.component';

@NgModule({
    imports: [CommonModule, TuiLetModule, PolymorpheusModule],
    declarations: [ToastrHostComponent],
    exports: [ToastrHostComponent],
})
export class ToastrHostModule {}
