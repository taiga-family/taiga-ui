import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract-props-accessor';
import {type AbstractExampleTuiControl} from '../control';

@Component({
    standalone: true,
    selector: 'hint-controller-documentation',
    imports: [RouterLink, TuiAddonDoc, TuiLink],
    templateUrl: './index.html',
    changeDetection,
})
export class HintControllerDocumentation {
    protected readonly documentedComponent = inject<AbstractExampleTuiControl>(
        ABSTRACT_PROPS_ACCESSOR,
    );

    protected readonly routes = DemoRoute;
}
