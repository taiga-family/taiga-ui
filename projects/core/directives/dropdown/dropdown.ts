import {TuiDropdownComponent} from './dropdown.component';
import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriverDirective} from './dropdown.driver';
import {TuiDropdownContext} from './dropdown-context.directive';
import {TuiDropdownHover} from './dropdown-hover.directive';
import {TuiDropdownManual} from './dropdown-manual.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';
import {TuiDropdownOpenLegacy} from './dropdown-open-legacy.directive';
import {TuiDropdownOptionsDirective} from './dropdown-options.directive';
import {TuiDropdownPortal} from './dropdown-portal.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';
import {TuiDropdownPositionSided} from './dropdown-position-sided.directive';
import {TuiDropdownSelection} from './dropdown-selection.directive';

export const TuiDropdown = [
    TuiDropdownOptionsDirective,
    TuiDropdownDriverDirective,
    TuiDropdownDirective,
    TuiDropdownComponent,
    TuiDropdownOpen,
    TuiDropdownOpenLegacy,
    TuiDropdownPortal,
    TuiDropdownManual,
    TuiDropdownHover,
    TuiDropdownContext,
    TuiDropdownPosition,
    TuiDropdownPositionSided,
    TuiDropdownSelection,
] as const;
