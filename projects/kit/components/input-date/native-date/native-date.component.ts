import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DATE_FILLER_LENGTH, TUI_DATE_FORMAT, TuiDateMode, TuiDay} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST, TuiTextfieldHost} from '@taiga-ui/core';
// import {DATE_FILLER_LENGTH, TUI_DATE_FORMAT, TuiDateMode, TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'input[tuiDate]',
    template: '',
    host: {
        type: 'date',
        '[tabIndex]': 'host.focusable ? 0 : -1',
        '[value]': 'value',
        '(change)': 'onChange($event.target.value)',
        '(click.stop.silent)': '0',
        '(input.stop.silent)': '0',
    },
    styleUrls: ['./native-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNativeDateComponent {
    constructor(
        @Inject(TUI_TEXTFIELD_HOST) readonly host: TuiTextfieldHost,
        @Inject(TUI_DATE_FORMAT) private readonly dateFormat: TuiDateMode,
    ) {}

    get value(): string {
        return this.host.value.length === DATE_FILLER_LENGTH
            ? TuiDay.normalizeParse(this.host.value, this.dateFormat).toString('YMD', '-')
            : '';
    }

    onChange(value: string): void {
        this.host.onValueChange(
            TuiDay.normalizeParse(value, 'YMD').toString(this.dateFormat),
        );
    }
}
