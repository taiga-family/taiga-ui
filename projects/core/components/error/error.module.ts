import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiExpandModule} from '@taiga-ui/core/components/expand';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiErrorComponent} from './error.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiExpandModule, TuiLetModule],
    declarations: [TuiErrorComponent],
    exports: [TuiErrorComponent],
})
export class TuiErrorModule {}
