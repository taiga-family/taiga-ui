import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocDocumentationPropertyConnectorDirective} from '@taiga-ui/addon-doc';

import type {AbstractExampleTuiDropdown} from '../dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'dropdown-documentation',
    templateUrl: './dropdown-documentation.template.html',
    changeDetection,
})
export class DropdownDocumentationComponent {
    @ViewChild('documentationPropertyManualChange')
    manualChange?: TuiDocDocumentationPropertyConnectorDirective<boolean>;

    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: AbstractExampleTuiDropdown,
    ) {}
}
