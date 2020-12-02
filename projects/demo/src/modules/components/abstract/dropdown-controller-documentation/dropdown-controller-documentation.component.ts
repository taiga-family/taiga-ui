import {Component, Inject} from '@angular/core';
import {changeDetection} from '../../../../change-detection-strategy';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../reactive-field';

@Component({
    selector: 'dropdown-controller-documentation',
    templateUrl: './dropdown-controller-documentation.template.html',
    changeDetection,
})
export class DropdownControllerDocumentationComponent {
    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: AbstractExampleTuiReactiveField,
    ) {}
}
