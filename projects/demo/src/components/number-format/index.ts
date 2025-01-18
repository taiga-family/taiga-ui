import {NgIf} from '@angular/common';
import type {WritableSignal} from '@angular/core';
import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion, TuiRounding} from '@taiga-ui/cdk';
import type {TuiDecimalMode, TuiNumberFormatSettings} from '@taiga-ui/core';
import {TUI_DEFAULT_NUMBER_FORMAT, TuiLink, TuiTitle} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocNumberFormat]',
    imports: [NgIf, RouterLink, TuiDocAPIItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiInputNumberOptionsProvider({
            min: 0,
        }),
    ],
})
export class TuiDocNumberFormat
    implements
        Record<
            keyof TuiNumberFormatSettings,
            WritableSignal<TuiNumberFormatSettings[keyof TuiNumberFormatSettings]>
        >
{
    protected readonly routes = DemoRoute;
    protected readonly decimalVariants: TuiDecimalMode[] = ['always', 'pad', 'not-zero'];
    protected readonly roundingVariants: TuiRounding[] = [
        'truncate',
        'round',
        'ceil',
        'floor',
    ];

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiNumberFormatSettings>> = [];

    public thousandSeparator = signal(TUI_DEFAULT_NUMBER_FORMAT.thousandSeparator);
    public decimalSeparator = signal(TUI_DEFAULT_NUMBER_FORMAT.decimalSeparator);
    public precision = signal(TUI_DEFAULT_NUMBER_FORMAT.precision);
    public decimalMode = signal(TUI_DEFAULT_NUMBER_FORMAT.decimalMode);
    public rounding = signal(TUI_DEFAULT_NUMBER_FORMAT.rounding);
}
