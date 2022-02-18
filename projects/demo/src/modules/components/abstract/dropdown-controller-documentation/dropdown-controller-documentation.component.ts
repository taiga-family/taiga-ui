import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

export interface ExampleTuiDropdown {
    dropdownDirectionVariants: readonly TuiVerticalDirection[];
    dropdownDirection: TuiVerticalDirection | null;
    dropdownLimitWidthVariants: readonly TuiDropdownWidthT[];
    dropdownLimitWidth: TuiDropdownWidthT;
    dropdownAlignVariants: readonly TuiHorizontalDirection[];
    dropdownAlign: TuiHorizontalDirection;
    dropdownMinHeight: number;
    dropdownMaxHeight: number;
    dropdownSided: boolean;
}

@Component({
    selector: 'dropdown-controller-documentation',
    templateUrl: './dropdown-controller-documentation.template.html',
    changeDetection,
})
export class DropdownControllerDocumentationComponent {
    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR) readonly documentedComponent: ExampleTuiDropdown,
    ) {}
}
