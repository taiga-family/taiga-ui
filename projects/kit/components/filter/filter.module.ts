import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit/components/badge';
import {TuiBlockDirective} from '@taiga-ui/kit/components/block';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiBadgeDirective,
        TuiModeModule,
        TuiBlockDirective,
    ],
    declarations: [TuiFilterComponent],
    exports: [TuiFilterComponent],
})
export class TuiFilterModule {}
