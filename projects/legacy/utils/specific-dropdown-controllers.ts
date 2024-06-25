import {tuiDropdownOptionsProvider} from '@taiga-ui/core/directives/dropdown';

/**
 * @deprecated: drop in v5.0
 */
export const FIXED_DROPDOWN_CONTROLLER_PROVIDER = tuiDropdownOptionsProvider({
    limitWidth: 'fixed',
    align: 'right',
});
