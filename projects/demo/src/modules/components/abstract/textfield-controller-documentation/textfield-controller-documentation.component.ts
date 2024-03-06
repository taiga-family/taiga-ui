import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import type {AbstractExampleTuiControl} from '../control';
import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'textfield-controller-documentation',
    templateUrl: './textfield-controller-documentation.template.html',
    changeDetection,
})
export class TextfieldControllerDocumentationComponent {
    protected readonly documentedComponent = inject<AbstractExampleTuiControl>(
        ABSTRACT_PROPS_ACCESSOR,
    );
}
