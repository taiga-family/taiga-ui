import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiBadgeModule} from '@taiga-ui/kit/components/badge';
import {TuiCheckboxBlockModule} from '@taiga-ui/kit/components/checkbox-block';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiCheckboxBlockModule,
        TuiBadgeModule,
        FormsModule,
    ],
    declarations: [TuiFilterComponent],
    exports: [TuiFilterComponent],
})
export class TuiFilterModule {}
