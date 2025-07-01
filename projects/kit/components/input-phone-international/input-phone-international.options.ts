import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import type {MetadataJson} from 'libphonenumber-js/core';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface TuiInputPhoneInternationalOptions {
    readonly countries: readonly TuiCountryIsoCode[];
    readonly countryIsoCode: TuiCountryIsoCode;
    readonly metadata: Observable<MetadataJson> | Promise<MetadataJson>;
    readonly separator: string;
}

export const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS: TuiInputPhoneInternationalOptions =
    {
        countries: [],
        countryIsoCode: 'RU',
        metadata: of({countries: {}, country_calling_codes: {}}),
        separator: '-',
    };

/**
 * Default parameters for input phone international component
 */
export const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
    },
);

export function tuiInputPhoneInternationalOptionsProvider(
    options: Partial<TuiInputPhoneInternationalOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
        options,
        TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
    );
}
