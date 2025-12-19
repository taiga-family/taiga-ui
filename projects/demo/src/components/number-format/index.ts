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
import {type TuiRounding} from '@taiga-ui/cdk';
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
    providers: [
        tuiInputNumberOptionsProvider({
            min: 0,
        }),
    ],
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

    public thousandSeparator = signal(TUI_DEFAULT_NUMBER_FORMAT.thousandSeparator);
    public decimalSeparator = signal(TUI_DEFAULT_NUMBER_FORMAT.decimalSeparator);
    public precision = signal(TUI_DEFAULT_NUMBER_FORMAT.precision);
    public decimalMode = signal(TUI_DEFAULT_NUMBER_FORMAT.decimalMode);
    public rounding = signal(TUI_DEFAULT_NUMBER_FORMAT.rounding);
}
