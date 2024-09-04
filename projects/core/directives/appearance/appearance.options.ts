import type {ExistingProvider, ProviderToken} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Bundled appearances for autocomplete purposes, not exported on purpose
 */
type Appearance =
    | 'accent'
    | 'destructive'
    | 'error'
    | 'flat'
    | 'floating'
    | 'glass'
    | 'info'
    | 'link'
    | 'neutral'
    | 'opposite'
    | 'outline'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'textfield'
    | 'warning'
    | 'whiteblock'
    | (Record<never, never> & string);

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
