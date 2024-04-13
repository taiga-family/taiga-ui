import {NgComponentOutlet} from '@angular/common';
import {Component, inject} from '@angular/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {tuiCreateToken} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';

import {HomeComponent} from '../home/home.component';

export const TUI_HOME_COMPONENT = tuiCreateToken(HomeComponent);

@Component({
    standalone: true,
    imports: [TuiDocPageModule, NgComponentOutlet],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly component = inject(TUI_HOME_COMPONENT);
}
