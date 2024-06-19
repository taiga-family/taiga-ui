import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {
    TuiDocDocumentation,
    TuiDocDocumentationPropertyConnector,
} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract-props-accessor';
import type {AbstractExampleTuiNumberFormat} from '../number-format';

@Component({
    standalone: true,
    selector: 'number-format-documentation',
    imports: [
        RouterLink,
        TuiLink,
        TuiDocDocumentation,
        TuiDocDocumentationPropertyConnector,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class NumberFormatDocumentation {
    protected readonly documentedComponent = inject<AbstractExampleTuiNumberFormat>(
        ABSTRACT_PROPS_ACCESSOR,
    );

    protected readonly routes = DemoRoute;
}
