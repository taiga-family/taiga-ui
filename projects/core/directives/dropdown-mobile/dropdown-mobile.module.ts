import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiScrollbarModule} from '@taiga-ui/core/components/scrollbar';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiDropdownMobileDirective} from './dropdown-mobile.directive';

@NgModule({
    imports: [PolymorpheusModule, TuiActiveZoneModule, TuiScrollbarModule],
    declarations: [TuiDropdownMobileComponent, TuiDropdownMobileDirective],
    exports: [TuiDropdownMobileDirective],
})
export class TuiDropdownMobileModule {}
