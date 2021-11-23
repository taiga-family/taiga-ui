import {InjectionToken} from '@angular/core';

import {TuiHintControllerDirective} from './hint-controller.directive';

export const TUI_HINT_CONTROLLER = new InjectionToken<TuiHintControllerDirective>(
    'Controls configuration of hints',
    {
        factory: () => new TuiHintControllerDirective(),
    },
);
