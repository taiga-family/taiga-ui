import {ChangeDetectorRef, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {watchedControllerFactory} from '@taiga-ui/core/providers';

import {TUI_HINT_CONTROLLER} from './hint-controller.token';

export const TUI_HINT_WATCHED_CONTROLLER = new InjectionToken(`watched hint controller`);
// TODO: 3.0 remove in ivy compilation
export const HINT_CONTROLLER_FACTORY = watchedControllerFactory;
export const HINT_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_HINT_WATCHED_CONTROLLER,
        deps: [TUI_HINT_CONTROLLER, ChangeDetectorRef, TuiDestroyService],
        useFactory: HINT_CONTROLLER_FACTORY,
    },
];
