import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule, TuiLetModule, TuiObscuredModule} from '@taiga-ui/cdk';
import {
    TuiDropdownModule,
    TuiDropdownOptionsDirective,
} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiHostedDropdownComponent} from './hosted-dropdown.component';
import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiObscuredModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
    ],
    declarations: [TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective],
    exports: [
        TuiHostedDropdownComponent,
        TuiHostedDropdownConnectorDirective,
        TuiDropdownOptionsDirective,
    ],
})
export class TuiHostedDropdownModule {}
