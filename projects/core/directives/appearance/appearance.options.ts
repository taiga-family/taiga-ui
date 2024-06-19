import type {ExistingProvider, ProviderToken} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiAppearanceOptions {
    readonly appearance: string;
}

export const TUI_APPEARANCE_DEFAULT_OPTIONS: TuiAppearanceOptions = {
    appearance: '',
};

export const TUI_APPEARANCE_OPTIONS = tuiCreateToken(TUI_APPEARANCE_DEFAULT_OPTIONS);

export function tuiAppearanceOptionsProvider(
    token: ProviderToken<TuiAppearanceOptions>,
): ExistingProvider {
    return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
