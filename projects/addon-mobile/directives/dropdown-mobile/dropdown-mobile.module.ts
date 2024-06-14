import {NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiSwipe} from '@taiga-ui/cdk';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiDropdownMobileDirective} from './dropdown-mobile.directive';

@NgModule({
    imports: [
        IntersectionObserverModule,
        TuiSwipe,
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
    declarations: [TuiDropdownMobileComponent, TuiDropdownMobileDirective],
    exports: [TuiDropdownMobileComponent, TuiDropdownMobileDirective],
})
export class TuiDropdownMobile {}
