import {NgComponentOutlet} from '@angular/common';
import {Component, inject, InjectionToken} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {Home} from '../home/home.component';

export const TUI_HOME_COMPONENT = new InjectionToken(
    ngDevMode ? 'TUI_HOME_COMPONENT' : '',
    {
        factory: () => Home,
    },
);

@Component({
    standalone: true,
    imports: [NgComponentOutlet, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly component = inject(TUI_HOME_COMPONENT);
}
