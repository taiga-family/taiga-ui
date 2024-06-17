import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, type TuiNumberFormatSettings} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {map, Subject, takeUntil} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFormatNumber',
    pure: false,
})
export class TuiFormatNumberPipe implements PipeTransform {
    private readonly numberFormat = inject(TUI_NUMBER_FORMAT);
    private readonly injector = inject(INJECTOR);
    private readonly destroy$ = new Subject<void>();

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
        this.destroy$.next();

        return untracked(() =>
            toSignal(
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
                    takeUntil(this.destroy$),
                ),
                {injector: this.injector, initialValue: ''},
            ),
        );
    }
}
