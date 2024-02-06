import {NgModule} from '@angular/core';

import {TuiDropdownComponent} from './dropdown.component';
import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriverDirective} from './dropdown.driver';
import {TuiDropdownContextDirective} from './dropdown-context.directive';
import {TuiDropdownHoverDirective} from './dropdown-hover.directive';
import {TuiDropdownManualDirective} from './dropdown-manual.directive';
import {TuiDropdownOpenDirective} from './dropdown-open.directive';
import {TuiDropdownOptionsDirective} from './dropdown-options.directive';
import {TuiDropdownPortalDirective} from './dropdown-portal.directive';
import {TuiDropdownPositionDirective} from './dropdown-position.directive';
import {TuiDropdownPositionSidedDirective} from './dropdown-position-sided.directive';
import {TuiDropdownSelectionDirective} from './dropdown-selection.directive';

@NgModule({
    imports: [
        TuiDropdownDirective,
        TuiDropdownComponent,
        TuiDropdownOpenDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownPortalDirective,
        TuiDropdownDriverDirective,
        TuiDropdownManualDirective,
        TuiDropdownHoverDirective,
        TuiDropdownContextDirective,
        TuiDropdownPositionDirective,
        TuiDropdownPositionSidedDirective,
        TuiDropdownSelectionDirective,
    ],
    exports: [
        TuiDropdownDirective,
        TuiDropdownComponent,
        TuiDropdownOpenDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownPortalDirective,
        TuiDropdownDriverDirective,
        TuiDropdownManualDirective,
        TuiDropdownHoverDirective,
        TuiDropdownContextDirective,
        TuiDropdownPositionDirective,
        TuiDropdownPositionSidedDirective,
        TuiDropdownSelectionDirective,
    ],
})
export class TuiDropdownModule {}
