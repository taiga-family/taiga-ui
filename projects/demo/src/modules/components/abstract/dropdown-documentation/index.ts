import {AsyncPipe} from '@angular/common';
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
import type {AbstractExampleTuiDropdown} from '../dropdown';

@Component({
    standalone: true,
    selector: 'dropdown-documentation',
    imports: [
        RouterLink,
        TuiLinkDirective,
        TuiDocDocumentationComponent,
        TuiDocDocumentationPropertyConnectorDirective,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class DropdownDocumentationComponent {
    protected readonly documentedComponent = inject<AbstractExampleTuiDropdown>(
        ABSTRACT_PROPS_ACCESSOR,
    );

    protected readonly docRoutes = DemoRoute;
}
