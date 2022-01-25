import {inject, InjectionToken} from '@angular/core';

import {TuiHintControllerDirective} from './hint-controller.directive';
import {TUI_HINT_CONTROLLER_OPTIONS} from './hint-controller-options';

export const TUI_HINT_CONTROLLER = new InjectionToken<TuiHintControllerDirective>(
    'Controls configuration of hints',
    {
        factory: () =>
            new TuiHintControllerDirective(inject(TUI_HINT_CONTROLLER_OPTIONS)),
    },
);
