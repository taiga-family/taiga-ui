import {ChangeDetectorRef, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {tuiWatchedControllerFactory} from '@taiga-ui/core/providers';

import {TUI_HINT_CONTROLLER} from './hint-controller.token';

export const TUI_HINT_WATCHED_CONTROLLER = new InjectionToken('watched hint controller');

export const HINT_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_HINT_WATCHED_CONTROLLER,
        deps: [TUI_HINT_CONTROLLER, ChangeDetectorRef, TuiDestroyService],
        useFactory: tuiWatchedControllerFactory,
    },
];
