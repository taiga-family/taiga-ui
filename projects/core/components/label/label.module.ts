import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLabelComponent} from './label.component';

@NgModule({
    imports: [PolymorpheusModule],
    declarations: [TuiLabelComponent],
    exports: [TuiLabelComponent],
})
export class TuiLabelModule {}
