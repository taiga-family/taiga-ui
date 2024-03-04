import {type Provider, type ProviderToken} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk';

export interface TuiAppearanceOptions {
    readonly appearance: string;
}

export const TUI_APPEARANCE_DEFAULT_OPTIONS: TuiAppearanceOptions = {
    appearance: '',
};

export const TUI_APPEARANCE_OPTIONS = tuiCreateToken(TUI_APPEARANCE_DEFAULT_OPTIONS);

export function tuiAppearanceOptionsProvider(
    useExisting: ProviderToken<TuiAppearanceOptions>,
): Provider {
    return {provide: TUI_APPEARANCE_OPTIONS, useExisting};
}
