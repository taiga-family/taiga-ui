import {Optional, Provider} from '@angular/core';
import {TUI_DROPDOWN_CONTROLLER, TuiDropdownControllerDirective} from '@taiga-ui/core';

/**
 * @deprecated: use {@link tuiFixedDropdownControllerFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function fixedDropdownControllerFactory(
    directive: TuiDropdownControllerDirective | null,
): TuiDropdownControllerDirective {
    directive = directive || new TuiDropdownControllerDirective();
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

/**
 * @deprecated: use {@link tuiLeftAlignedDropdownControllerFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function leftAlignedDropdownControllerFactory(
    directive: TuiDropdownControllerDirective | null,
): TuiDropdownControllerDirective {
    directive = directive || new TuiDropdownControllerDirective();
    directive.align = 'left';

    return directive;
}

export const tuiLeftAlignedDropdownControllerFactory =
    leftAlignedDropdownControllerFactory;

export const LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: TUI_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), TuiDropdownControllerDirective]],
        useFactory: leftAlignedDropdownControllerFactory,
    },
];

export const tuiFixedDropdownControllerFactory = fixedDropdownControllerFactory;
