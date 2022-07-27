import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {AbstractExampleTuiControl} from '../control';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

@Component({
    selector: `textfield-controller-documentation`,
    templateUrl: `./textfield-controller-documentation.template.html`,
    changeDetection,
})
export class TextfieldControllerDocumentationComponent {
    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: AbstractExampleTuiControl,
    ) {}
}
