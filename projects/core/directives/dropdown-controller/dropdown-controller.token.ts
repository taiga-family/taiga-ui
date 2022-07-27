import {InjectionToken} from '@angular/core';

import {TuiDropdownControllerDirective} from './dropdown-controller.directive';

export const TUI_DROPDOWN_CONTROLLER = new InjectionToken<TuiDropdownControllerDirective>(
    `Controls configuration of hints`,
    {
        factory: () => new TuiDropdownControllerDirective(),
    },
);
