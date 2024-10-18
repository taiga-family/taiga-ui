import type {ExistingProvider, ProviderToken} from '@angular/core';
import type {TuiLooseUnion} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Bundled appearances for autocomplete purposes, not exported on purpose
 */
type Appearance = TuiLooseUnion<
    | 'primary'
    | 'primary-destructive'
    | 'primary-grayscale'
    | 'secondary'
    | 'secondary-destructive'
    | 'secondary-grayscale'
    | 'flat'
    | 'flat-destructive'
    | 'flat-grayscale'
    | 'outline'
    | 'outline-destructive'
    | 'outline-grayscale'
    | 'action'
    | 'action-destructive'
    | 'action-grayscale'
    | 'neutral'
    | 'negative'
    | 'positive'
    | 'warning'
    | 'info'
    | 'icon'
    | 'floating'
    | 'textfield'
    | 'glass'
    | 'accent'
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
