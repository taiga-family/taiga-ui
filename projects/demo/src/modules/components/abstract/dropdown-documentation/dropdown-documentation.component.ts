import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import type {AbstractExampleTuiDropdown} from '../dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

@Component({
    selector: `dropdown-documentation`,
    templateUrl: `./dropdown-documentation.template.html`,
    changeDetection,
})
export class DropdownDocumentationComponent {
    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: AbstractExampleTuiDropdown,
    ) {}
}
