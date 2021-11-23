import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDataListComponent} from './data-list.component';
import {TuiDataListDirective} from './data-list.directive';
import {TuiDataListDropdownManagerDirective} from './data-list-dropdown-manager.directive';
import {TuiOptGroupDirective} from './opt-group.directive';
import {TuiOptionComponent} from './option/option.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, PolymorpheusModule],
    declarations: [
        TuiDataListComponent,
        TuiOptionComponent,
        TuiOptGroupDirective,
        TuiDataListDirective,
        TuiDataListDropdownManagerDirective,
    ],
    exports: [
        TuiDataListComponent,
        TuiOptionComponent,
        TuiOptGroupDirective,
        TuiDataListDirective,
        TuiDataListDropdownManagerDirective,
    ],
})
export class TuiDataListModule {}
