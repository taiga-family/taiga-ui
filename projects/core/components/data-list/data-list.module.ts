import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDataListComponent} from './data-list.component';
import {TuiDataListDirective} from './data-list.directive';
import {TuiOptGroupDirective} from './opt-group.directive';
import {TuiOptionComponent} from './option/option.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, PolymorpheusModule],
    declarations: [
        TuiDataListComponent,
        TuiOptionComponent,
        TuiOptGroupDirective,
        TuiDataListDirective,
    ],
    exports: [
        TuiDataListComponent,
        TuiOptionComponent,
        TuiOptGroupDirective,
        TuiDataListDirective,
    ],
})
export class TuiDataListModule {}
