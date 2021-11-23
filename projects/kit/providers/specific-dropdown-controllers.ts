import {Optional, Provider} from '@angular/core';
import {TUI_DROPDOWN_CONTROLLER, TuiDropdownControllerDirective} from '@taiga-ui/core';

export function fixedDropdownControllerFactory(
    value: TuiDropdownControllerDirective | null,
): TuiDropdownControllerDirective {
    let directive = value || new TuiDropdownControllerDirective();
    directive.limitWidth = 'fixed';

    return directive;
}

export const FIXED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: TUI_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), TuiDropdownControllerDirective]],
        useFactory: fixedDropdownControllerFactory,
    },
];

export function leftAlignedDropdownControllerFactory(
    value: TuiDropdownControllerDirective | null,
): TuiDropdownControllerDirective {
    let directive = value || new TuiDropdownControllerDirective();
    directive.align = 'left';

    return directive;
}

export const LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: TUI_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), TuiDropdownControllerDirective]],
        useFactory: leftAlignedDropdownControllerFactory,
    },
];
