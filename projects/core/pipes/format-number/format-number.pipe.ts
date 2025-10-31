import {inject, Pipe, type PipeTransform} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TUI_NUMBER_FORMAT, type TuiNumberFormatSettings} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {map, type Observable} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFormatNumber',
})
export class TuiFormatNumberPipe implements PipeTransform {
    private readonly numberFormat = toObservable(inject(TUI_NUMBER_FORMAT));

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
