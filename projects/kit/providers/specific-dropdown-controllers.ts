import {tuiDropdownOptionsProvider} from '@taiga-ui/core';

export const TUI_FIXED_DROPDOWN_CONTROLLER_PROVIDER = tuiDropdownOptionsProvider({
    limitWidth: `fixed`,
    align: `right`,
});

/**
 * @deprecated: use {@link TUI_FIXED_DROPDOWN_CONTROLLER_PROVIDER}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const FIXED_DROPDOWN_CONTROLLER_PROVIDER = TUI_FIXED_DROPDOWN_CONTROLLER_PROVIDER;
