import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiLetDirective,
    TuiObscuredDirective,
} from '@taiga-ui/cdk';
import {
    TuiDropdownModule,
    TuiDropdownOptionsDirective,
} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiAccessorProxyDirective} from './accessor-proxy.directive';
import {TuiDropdownOpenMonitorDirective} from './dropdown-open-monitor.directive';
import {TuiHostedDropdownComponent} from './hosted-dropdown.component';
import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

/**
 * @deprecated use {@link TuiDropdownOpenDirective} instead
 * // TODO: Move to legacy package before 4.0
 */
@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiLetDirective,
        TuiObscuredDirective,
        TuiActiveZoneDirective,
        TuiDropdownModule,
    ],
    declarations: [
        TuiAccessorProxyDirective,
        TuiDropdownOpenMonitorDirective,
        TuiHostedDropdownComponent,
        TuiHostedDropdownConnectorDirective,
    ],
    exports: [
        TuiHostedDropdownComponent,
        TuiHostedDropdownConnectorDirective,
        TuiDropdownOptionsDirective,
    ],
})
export class TuiHostedDropdownModule {}
