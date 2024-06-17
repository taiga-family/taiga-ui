import {NgComponentOutlet} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiCreateToken} from '@taiga-ui/cdk';

import {HomeComponent} from '../home/home.component';

export const TUI_HOME_COMPONENT = tuiCreateToken(HomeComponent);

@Component({
    standalone: true,
    imports: [TuiDemo, NgComponentOutlet],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly component = inject(TUI_HOME_COMPONENT);
}
