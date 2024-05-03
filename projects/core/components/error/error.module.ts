import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiErrorComponent} from './error.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiLetDirective],
    declarations: [TuiErrorComponent],
    exports: [TuiErrorComponent],
})
export class TuiErrorModule {}
