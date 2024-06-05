import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {
    TuiDocDocumentationComponent,
    TuiDocDocumentationPropertyConnectorDirective,
} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract-props-accessor';
import type {AbstractExampleTuiNumberFormat} from '../number-format';

@Component({
    standalone: true,
    selector: 'number-format-documentation',
    imports: [
        RouterLink,
        TuiLinkDirective,
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class NumberFormatDocumentationComponent {
    protected readonly documentedComponent = inject<AbstractExampleTuiNumberFormat>(
        ABSTRACT_PROPS_ACCESSOR,
    );

    protected readonly docRoutes = DemoRoute;
}
