import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiDropdownMobileDirective} from './dropdown-mobile.directive';

@NgModule({
    imports: [PolymorpheusModule, CommonModule],
    declarations: [TuiDropdownMobileComponent, TuiDropdownMobileDirective],
    exports: [TuiDropdownMobileDirective],
})
export class TuiDropdownMobileModule {}
