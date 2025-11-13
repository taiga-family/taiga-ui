import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiDropdownHoverOptions {
    readonly hideDelay: number;
    readonly showDelay: number;
}

/** Default values for hint options */
export const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS: TuiDropdownHoverOptions = {
    showDelay: 200,
    hideDelay: 500,
};

/**
 * Default parameters for dropdown hover directive
 */
export const [TUI_DROPDOWN_HOVER_OPTIONS, tuiDropdownHoverOptionsProvider] =
    tuiCreateOptions(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
