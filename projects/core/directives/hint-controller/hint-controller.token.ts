import {inject, InjectionToken} from '@angular/core';
import {TUI_HINT_OPTIONS} from '@taiga-ui/core/directives/hint';

import {TuiHintControllerDirective} from './hint-controller.directive';

export const TUI_HINT_CONTROLLER = new InjectionToken<TuiHintControllerDirective>(
    `Controls configuration of hints`,
    {
        factory: () => new TuiHintControllerDirective(inject(TUI_HINT_OPTIONS)),
    },
);
