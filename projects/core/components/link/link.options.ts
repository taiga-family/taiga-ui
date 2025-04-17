import type {FactoryProvider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';

export interface TuiLinkOptions extends TuiAppearanceOptions {
    /**
     * @deprecated: use on host
     * [style.text-decoration-style]="'dashed'"
     */
    readonly pseudo: boolean;
}

export const TUI_LINK_DEFAULT_OPTIONS: TuiLinkOptions = {
    appearance: 'action',
    pseudo: false,
};

export const TUI_LINK_OPTIONS = tuiCreateToken(TUI_LINK_DEFAULT_OPTIONS);

export function tuiLinkOptionsProvider(
    options: Partial<TuiLinkOptions>,
): FactoryProvider {
    return tuiProvideOptions(TUI_LINK_OPTIONS, options, TUI_LINK_DEFAULT_OPTIONS);
}
