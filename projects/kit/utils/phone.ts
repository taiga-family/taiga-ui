import {CHAR_PLUS} from '@taiga-ui/cdk/constants';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types/country-iso-code';
import type {MetadataJson} from 'libphonenumber-js/core';
import {getCountryCallingCode} from 'libphonenumber-js/core';

export function tuiGetCallingCode(
    iso: TuiCountryIsoCode,
    metadata?: MetadataJson | null,
): string {
    return metadata ? CHAR_PLUS + getCountryCallingCode(iso, metadata) : '';
}
