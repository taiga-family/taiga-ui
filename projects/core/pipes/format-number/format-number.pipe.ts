import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, type TuiNumberFormatSettings} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {map} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFormatNumber',
    pure: false,
})
export class TuiFormatNumberPipe extends TuiObservablePipe implements PipeTransform {
    private readonly numberFormat = inject(TUI_NUMBER_FORMAT);

    /**
     * Formats number adding a thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param settings See {@link TuiNumberFormatSettings}
     */
    public transform(
        value: number,
        settings: Partial<TuiNumberFormatSettings> = {},
    ): string {
        return this.getSignal(value, settings)();
    }

    @tuiPure
    private getSignal(
        value: number,
        settings: Partial<TuiNumberFormatSettings>,
    ): Signal<string> {
        return this.toSignal(
            this.numberFormat.pipe(
                map(format =>
                    tuiFormatNumber(value, {
                        ...format,
                        precision: Number.isNaN(format.precision)
                            ? Infinity
                            : format.precision,
                        ...settings,
                    }),
                ),
            ),
            '',
        );
    }
}
