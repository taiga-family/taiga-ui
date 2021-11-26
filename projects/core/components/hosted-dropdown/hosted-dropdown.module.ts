import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiObscuredModule} from '@taiga-ui/cdk';
import {TuiDropdownModule} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHostedDropdownComponent} from './hosted-dropdown.component';
import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiObscuredModule,
        PolymorpheusModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
    ],
    declarations: [TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective],
    exports: [TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective],
})
export class TuiHostedDropdownModule {}
