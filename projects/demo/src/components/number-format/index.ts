import {
    ChangeDetectionStrategy,
    Component,
    input,
    signal,
    type WritableSignal,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {CHAR_MINUS, type TuiRounding} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_NUMBER_FORMAT,
    type TuiDecimalMode,
    TuiLink,
    type TuiNumberFormatSettings,
    TuiTitle,
} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tbody[tuiDocNumberFormat]',
    imports: [RouterLink, TuiDocAPIItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiInputNumberOptionsProvider({min: 0})],
})
export class TuiDocNumberFormat implements Record<
    keyof TuiNumberFormatSettings,
    WritableSignal<TuiNumberFormatSettings[keyof TuiNumberFormatSettings]>
> {
    protected readonly routes = DemoRoute;
    protected readonly decimalVariants: TuiDecimalMode[] = ['always', 'pad', 'not-zero'];

    protected readonly roundingVariants: TuiRounding[] = [
        'truncate',
        'round',
        'ceil',
        'floor',
    ];

    public readonly hiddenOptions = input<Array<string | keyof TuiNumberFormatSettings>>(
        [],
    );

    public readonly thousandSeparator = signal(
        TUI_DEFAULT_NUMBER_FORMAT.thousandSeparator,
    );

    public readonly thousandSeparatorPattern = signal(
        TUI_DEFAULT_NUMBER_FORMAT.thousandSeparatorPattern,
    );

    public readonly decimalSeparator = signal(TUI_DEFAULT_NUMBER_FORMAT.decimalSeparator);
    public readonly precision = signal(TUI_DEFAULT_NUMBER_FORMAT.precision);
    public readonly decimalMode = signal(TUI_DEFAULT_NUMBER_FORMAT.decimalMode);
    public readonly rounding = signal(TUI_DEFAULT_NUMBER_FORMAT.rounding);
    public readonly negativePattern = signal(TUI_DEFAULT_NUMBER_FORMAT.negativePattern);
    public readonly minusSign = signal(CHAR_MINUS);
    public readonly maximumFractionDigits = signal(TUI_DEFAULT_NUMBER_FORMAT.precision);
    public readonly minimumFractionDigits = signal(0);
}
