import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {ABSTRACT_PROPS_ACCESSOR} from '../inherited-documentation/abstract-props-accessor';
import type {AbstractExampleTuiNumberFormat} from '../number-format';

@Component({
    selector: 'number-format-documentation',
    templateUrl: './number-format-documentation.template.html',
    changeDetection,
})
export class NumberFormatDocumentationComponent {
    protected readonly documentedComponent = inject<AbstractExampleTuiNumberFormat>(
        ABSTRACT_PROPS_ACCESSOR,
    );
}
