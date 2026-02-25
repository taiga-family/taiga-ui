import {TuiDropdownComponent} from './dropdown.component';
import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriverDirective} from './dropdown.driver';
import {TuiDropdownA11y} from './dropdown-a11y.directive';
import {TuiDropdownContent} from './dropdown-content.directive';
import {TuiDropdownContext} from './dropdown-context.directive';
import {TuiDropdownHover} from './dropdown-hover.directive';
import {TuiDropdownManual} from './dropdown-manual.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';
import {TuiDropdownOptionsDirective} from './dropdown-options.directive';
import {TuiDropdownPosition} from './dropdown-position.directive';
import {TuiDropdownPositionSided} from './dropdown-position-sided.directive';
import {TuiDropdownSelection} from './dropdown-selection.directive';

export const TuiDropdown = [
    TuiDropdownOptionsDirective,
    TuiDropdownDriverDirective,
    TuiDropdownDirective,
    TuiDropdownComponent,
    TuiDropdownOpen,
    TuiDropdownManual,
    TuiDropdownHover,
    TuiDropdownA11y,
    TuiDropdownContent,
    TuiDropdownContext,
    TuiDropdownPosition,
    TuiDropdownPositionSided,
    TuiDropdownSelection,
] as const;
