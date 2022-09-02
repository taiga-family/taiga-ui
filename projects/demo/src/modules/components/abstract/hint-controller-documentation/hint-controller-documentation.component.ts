import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import type {AbstractExampleTuiControl} from '../control';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

@Component({
    selector: `hint-controller-documentation`,
    templateUrl: `./hint-controller-documentation.template.html`,
    changeDetection,
})
export class HintControllerDocumentationComponent {
    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: AbstractExampleTuiControl,
    ) {}
}
