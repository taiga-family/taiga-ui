import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiNumberFormatSettings} from '@taiga-ui/core/tokens';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFormatNumber',
})
export class TuiFormatNumberPipe implements PipeTransform {
    private readonly numberFormat = inject(TUI_NUMBER_FORMAT);

    /**
     * Formats number adding thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param settings See {@link TuiNumberFormatSettings}
     */
    public transform(
        value: number,
        settings: Partial<TuiNumberFormatSettings> = {},
    ): Observable<string> {
        return this.numberFormat.pipe(
            map((format) =>
                tuiFormatNumber(value, {
                    ...format,
                    precision: Number.isNaN(format.precision)
                        ? Infinity
                        : format.precision,
                    ...settings,
                }),
            ),
        );
    }
}
