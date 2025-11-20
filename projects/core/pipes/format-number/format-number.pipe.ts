import {
    computed,
    inject,
    Pipe,
    type PipeTransform,
    signal,
    untracked,
} from '@angular/core';
import {TUI_NUMBER_FORMAT, type TuiNumberFormatSettings} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';

@Pipe({
    name: 'tuiFormatNumber',
    pure: false,
})
export class TuiFormatNumberPipe implements PipeTransform {
    private readonly format = inject(TUI_NUMBER_FORMAT);
    private readonly value = signal(NaN);
    private readonly settings = signal<Partial<TuiNumberFormatSettings>>({});
    private readonly formatted = computed(() =>
        tuiFormatNumber(this.value(), {
            ...this.format(),
            precision: Number.isNaN(this.format().precision)
                ? Infinity
                : this.format().precision,
            ...this.settings(),
        }),
    );

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
        untracked(() => {
            this.value.set(value);
            this.settings.set(settings);
        });

        return this.formatted();
    }
}
