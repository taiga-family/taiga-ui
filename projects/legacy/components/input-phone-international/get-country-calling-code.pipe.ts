import {Pipe, type PipeTransform} from '@angular/core';
import {CHAR_PLUS} from '@taiga-ui/cdk';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import type {MetadataJson} from 'libphonenumber-js/core';
import {getCountryCallingCode} from 'libphonenumber-js/core';

@Pipe({
    standalone: true,
    name: 'tuiGetCountryCallingCode',
})
export class TuiGetCountryCallingCodePipe implements PipeTransform {
    public transform(
        countryIsoCode: TuiCountryIsoCode,
        metadata: MetadataJson | null,
    ): string {
        return metadata
            ? CHAR_PLUS + getCountryCallingCode(countryIsoCode, metadata)
            : '';
    }
}
