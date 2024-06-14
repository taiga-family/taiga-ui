import {NgModule} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDropdownComponent} from './dropdown.component';
import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriverDirective} from './dropdown.driver';
import {TuiDropdownContext} from './dropdown-context.directive';
import {TuiDropdownHover} from './dropdown-hover.directive';
import {TuiDropdownManual} from './dropdown-manual.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';
import {TuiDropdownOptionsDirective} from './dropdown-options.directive';
import {TuiDropdownPortal} from './dropdown-portal.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';
import {TuiDropdownPositionSided} from './dropdown-position-sided.directive';
import {TuiDropdownSelection} from './dropdown-selection.directive';

@NgModule({
    imports: [
        TuiDropdownOpen,
        TuiDropdownDirective,
        TuiDropdownDriverDirective,
        TuiDropdownPosition,
        TuiScrollbar,
        TuiActiveZone,
        PolymorpheusOutlet,
    ],
    declarations: [
        TuiDropdownComponent,
        TuiDropdownOptionsDirective,
        TuiDropdownPortal,
        TuiDropdownManual,
        TuiDropdownHover,
        TuiDropdownContext,
        TuiDropdownPositionSided,
        TuiDropdownSelection,
    ],
    exports: [
        TuiDropdownComponent,
        TuiDropdownDirective,
        TuiDropdownOpen,
        TuiDropdownOptionsDirective,
        TuiDropdownPortal,
        TuiDropdownDriverDirective,
        TuiDropdownManual,
        TuiDropdownHover,
        TuiDropdownContext,
        TuiDropdownPosition,
        TuiDropdownPositionSided,
        TuiDropdownSelection,
    ],
})
export class TuiDropdown {}
