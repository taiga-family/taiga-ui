import {NgComponentOutlet} from '@angular/common';
import {Component, Inject, Type} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {tuiCreateToken} from '@taiga-ui/cdk';

import {HomeComponent} from '../home/home.component';

export const TUI_HOME_COMPONENT = tuiCreateToken<Type<unknown>>(HomeComponent);

@Component({
    standalone: true,
    selector: 'getting-started',
    imports: [TuiDocPageModule, NgComponentOutlet],
    templateUrl: './getting-started.template.html',
    changeDetection,
})
export default class GettingStartedComponent {
    constructor(@Inject(TUI_HOME_COMPONENT) readonly component: Type<unknown>) {}
}
