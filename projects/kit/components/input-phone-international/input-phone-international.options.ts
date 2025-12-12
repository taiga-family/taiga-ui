import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {type MetadataJson} from 'libphonenumber-js/core';
import {type Observable, of} from 'rxjs';

export interface TuiInputPhoneInternationalOptions {
    readonly countries: readonly TuiCountryIsoCode[];
    readonly countrySearch: boolean;
    readonly countryIsoCode: TuiCountryIsoCode;
    readonly metadata: Observable<MetadataJson> | Promise<MetadataJson>;
    readonly separator: string;
}

export const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS: TuiInputPhoneInternationalOptions =
    {
        countries: [],
        countrySearch: false,
        countryIsoCode: 'RU',
        metadata: of({countries: {}, country_calling_codes: {}}),
        separator: '-',
    };

/**
 * Default parameters for input phone international component
 */
export const [
    TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
    tuiInputPhoneInternationalOptionsProvider,
] = tuiCreateOptions(TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
