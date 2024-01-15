import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit/components/badge';
import {TuiCheckboxBlockModule} from '@taiga-ui/kit/components/checkbox-block';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiCheckboxBlockModule,
        TuiBadgeDirective,
        TuiModeModule,
    ],
    declarations: [TuiFilterComponent],
    exports: [TuiFilterComponent],
})
export class TuiFilterModule {}
