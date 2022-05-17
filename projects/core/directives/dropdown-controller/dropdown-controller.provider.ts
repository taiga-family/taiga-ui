import {ChangeDetectorRef, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {watchedControllerFactory} from '@taiga-ui/core/providers';

import {TUI_DROPDOWN_CONTROLLER} from './dropdown-controller.token';

export const TUI_DROPDOWN_WATCHED_CONTROLLER = new InjectionToken(
    'watched dropdown controller',
);
// TODO: 3.0 remove in ivy compilation
export const DROPDOWN_CONTROLLER_FACTORY = watchedControllerFactory;
export const DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_DROPDOWN_WATCHED_CONTROLLER,
        deps: [TUI_DROPDOWN_CONTROLLER, ChangeDetectorRef, TuiDestroyService],
        useFactory: DROPDOWN_CONTROLLER_FACTORY,
    },
];
