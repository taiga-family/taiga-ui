import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiDropdownMobileOptions {
    topShift: number;
}

export const [TUI_DROPDOWN_MOBILE_OPTIONS, tuiDropdownMobileOptionsProvider] =
    tuiCreateOptions<TuiDropdownMobileOptions>({
        topShift: 16,
    });
