import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES_MASKS} from '@taiga-ui/legacy/tokens';
import {tuiIsoToCountryCode} from '@taiga-ui/legacy/utils';

/**
 * @deprecated Use `getCountryCallingCode` from `libphonenumber-js/core` instead
 * ```ts
 * import {getCountryCallingCode} from 'libphonenumber-js/core';
 * import metadata from 'libphonenumber-js/max/metadata';
 *
 * getCountryCallingCode('US', metadata) // 1
 * getCountryCallingCode('GB', metadata) // 44
 * ```
 */
@Pipe({
    standalone: true,
    name: 'tuiIsoToCountryCode',
})
export class TuiIsoToCountryCodePipe implements PipeTransform {
    private readonly countriesMasks = inject(TUI_COUNTRIES_MASKS);

    /**
     * @deprecated Use `getCountryCallingCode` from `libphonenumber-js/core` instead
     * ```ts
     * import {getCountryCallingCode} from 'libphonenumber-js/core';
     * import metadata from 'libphonenumber-js/max/metadata';
     *
     * getCountryCallingCode('US', metadata) // 1
     * getCountryCallingCode('GB', metadata) // 44
     * ```
     */
    public transform(isoCode: TuiCountryIsoCode): string {
        return tuiIsoToCountryCode(this.countriesMasks, isoCode);
    }
}
