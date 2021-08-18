import {Component, Inject} from '@angular/core';
import {
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {changeDetection} from '../../../../change-detection-strategy';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

export interface ExampleTuiDropdown {
    dropdownDirectionVariants: ReadonlyArray<TuiVerticalDirection>;
    dropdownDirection: TuiVerticalDirection | null;
    dropdownLimitWidthVariants: readonly TuiDropdownWidthT[];
    dropdownLimitWidth: TuiDropdownWidthT | null;
    dropdownAlignVariants: ReadonlyArray<TuiHorizontalDirection>;
    dropdownAlign: TuiHorizontalDirection;
    dropdownMinHeight: number;
    dropdownMaxHeight: number;
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
