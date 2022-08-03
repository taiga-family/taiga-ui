import {
    ChangeDetectorRef,
    InjectionToken,
    Optional,
    Provider,
    SkipSelf,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_HINT_OPTIONS, TuiHintOptions} from '@taiga-ui/core/directives';
import {tuiWatchedControllerFactory} from '@taiga-ui/core/providers';

import {TuiHintControllerDirective} from './hint-controller.directive';
import {TUI_HINT_CONTROLLER} from './hint-controller.token';

export const TUI_HINT_WATCHED_CONTROLLER = new InjectionToken(`watched hint controller`);

export const HINT_CONTROLLER_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_HINT_WATCHED_CONTROLLER,
        deps: [TUI_HINT_CONTROLLER, ChangeDetectorRef, TuiDestroyService],
        useFactory: tuiWatchedControllerFactory,
    },
];

export const TUI_HINT_CONTROLLER_OPTIONS: Provider = [
    {
        provide: TUI_HINT_OPTIONS,
        deps: [
            [new Optional(), TuiHintControllerDirective],
            [new SkipSelf(), TUI_HINT_OPTIONS],
        ],
        useFactory: (hint: TuiHintOptions | null, options: TuiHintOptions) =>
            hint || options,
    },
];
