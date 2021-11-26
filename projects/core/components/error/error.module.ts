import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiErrorComponent} from './error.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiErrorComponent],
    exports: [TuiErrorComponent],
})
export class TuiErrorModule {}
