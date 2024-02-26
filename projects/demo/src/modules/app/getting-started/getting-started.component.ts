import {NgComponentOutlet} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {tuiCreateToken} from '@taiga-ui/cdk';

import {HomeComponent} from '../home/home.component';

export const TUI_HOME_COMPONENT = tuiCreateToken(HomeComponent);

@Component({
    standalone: true,
    selector: 'getting-started',
    imports: [TuiDocPageModule, NgComponentOutlet],
    templateUrl: './getting-started.template.html',
    changeDetection,
})
export default class GettingStartedComponent {
    protected readonly component = inject(TUI_HOME_COMPONENT);
}
