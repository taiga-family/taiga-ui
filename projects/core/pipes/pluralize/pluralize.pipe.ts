import {Pipe, PipeTransform} from '@angular/core';
import {TuiPluralize} from '@taiga-ui/core/types';
import {pluralize} from '@taiga-ui/core/utils/format';

/**
 * @deprecated This implementation targets Russian.
 * Use https://angular.io/api/common/I18nPluralPipe
 */
@Pipe({name: `tuiPluralize`})
export class TuiPluralizePipe implements PipeTransform {
    /**
     * Chooses correct plural form
     * @param value
     * @param args tuple of three plural forms
     */
    transform(value: number, args: TuiPluralize): string {
        return pluralize(value, args);
    }
}
