import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/enums';
import type {MetadataJson} from 'libphonenumber-js/core';
import type {Observable} from 'rxjs';
import {defer} from 'rxjs';

export interface TuiInputPhoneInternationalOptions {
    readonly countries: readonly TuiCountryIsoCode[];
    readonly countryIsoCode: TuiCountryIsoCode;
    readonly metadata: Observable<MetadataJson> | Promise<MetadataJson>;
}

export const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS: TuiInputPhoneInternationalOptions =
    {
        countries: [],
        countryIsoCode: 'RU',
        metadata: defer(async () =>
            import('libphonenumber-js/min/metadata').then(m => m.default),
        ),
    };

/**
 * Default parameters for input phone international component
 */
export const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS = tuiCreateToken(
    TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
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
