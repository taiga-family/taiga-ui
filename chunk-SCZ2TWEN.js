import"./chunk-42JZD6NG.js";var e=`import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {
    TuiDocDocumentation,
    TuiDocDocumentationPropertyConnector,
} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract-props-accessor';
import {type AbstractExampleTuiControl} from '../control';

@Component({
    selector: 'textfield-controller-documentation',
    imports: [
        RouterLink,
        TuiDocDocumentation,
        TuiDocDocumentationPropertyConnector,
        TuiLink,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class TextfieldControllerDocumentation {
    protected readonly documentedComponent = inject<AbstractExampleTuiControl>(
        ABSTRACT_PROPS_ACCESSOR,
    );

    protected readonly routes = DemoRoute;
}
`;export{e as default};
