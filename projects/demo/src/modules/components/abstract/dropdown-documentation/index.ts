import {AsyncPipe} from '@angular/common';
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
import type {AbstractExampleTuiDropdown} from '../dropdown';

@Component({
    standalone: true,
    selector: 'dropdown-documentation',
    imports: [
        TuiLink,
        TuiDocDocumentation,
        TuiDocDocumentationPropertyConnector,
        AsyncPipe,
        RouterLink,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class DropdownDocumentation {
    protected readonly documentedComponent = inject<AbstractExampleTuiDropdown>(
        ABSTRACT_PROPS_ACCESSOR,
    );

    protected readonly routes = DemoRoute;
}
