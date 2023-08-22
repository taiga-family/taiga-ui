import {Component, Inject, Type} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiCreateToken} from '@taiga-ui/cdk';

import {HomeComponent} from '../home/home.component';

export const TUI_HOME_COMPONENT = tuiCreateToken<Type<unknown>>(HomeComponent);

@Component({
    selector: 'getting-started',
    templateUrl: './getting-started.template.html',
    changeDetection,
})
export class GettingStartedComponent {
    constructor(@Inject(TUI_HOME_COMPONENT) readonly component: Type<unknown>) {}
}
