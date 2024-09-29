import type {ExistingProvider, ProviderToken} from '@angular/core';
import type {TuiLooseUnion} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Bundled appearances for autocomplete purposes, not exported on purpose
 */
type Appearance = TuiLooseUnion<
    | 'accent'
    | 'destructive'
    | 'error'
    | 'flat'
    | 'floating'
    | 'glass'
    | 'icon'
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
>;

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
