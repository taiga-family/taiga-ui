import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';

// TODO: remove in v5
export interface TuiLinkOptions extends TuiAppearanceOptions {
    /**
     * @deprecated: use on host
     * [style.text-decoration-line]="'underline'"
     */
    readonly pseudo: boolean;
}

export const TUI_LINK_DEFAULT_OPTIONS: TuiLinkOptions = {
    appearance: 'action',
    pseudo: false,
};

export const [TUI_LINK_OPTIONS, tuiLinkOptionsProvider] = tuiCreateOptions(
    TUI_LINK_DEFAULT_OPTIONS,
);
