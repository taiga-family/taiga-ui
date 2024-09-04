import type {ExistingProvider, ProviderToken} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Bundled appearances for autocomplete purposes, not exported on purpose
 */
type Appearance =
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'floating'
    | 'glass'
    | 'link'
    | 'textfield'
    | 'opposite'
    | 'whiteblock'
    | 'outline'
    | 'flat'
    | 'destructive'
    | 'neutral'
    | 'error'
    | 'success'
    | 'warning'
    | 'info'
    | ({} & string);

export interface TuiAppearanceOptions {
    readonly appearance: Appearance;
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
