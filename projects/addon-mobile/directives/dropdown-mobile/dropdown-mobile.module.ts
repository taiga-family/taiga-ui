import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiSwipeModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiDropdownMobileDirective} from './dropdown-mobile.directive';

@NgModule({
    imports: [
        PolymorpheusModule,
        CommonModule,
        TuiSwipeModule,
        IntersectionObserverModule,
    ],
    declarations: [TuiDropdownMobileComponent, TuiDropdownMobileDirective],
    exports: [TuiDropdownMobileDirective],
})
export class TuiDropdownMobileModule {}
