import {Component, Inject} from '@angular/core';
import {changeDetection} from '../../../../change-detection-strategy';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../reactive-field';

@Component({
    selector: 'textfield-controller-documentation',
    templateUrl: './textfield-controller-documentation.template.html',
    changeDetection,
})
export class TextfieldControllerDocumentationComponent {
    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: AbstractExampleTuiReactiveField,
    ) {}
}
