import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TuiTitle} from '@taiga-ui/core';
import {TUI_TIME_FORMAT, type TuiTimeFormatSettings} from '@taiga-ui/kit';

@Component({
    selector: 'tbody[tuiDocTimeFormat]',
    imports: [TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTimeFormat {
    private readonly defaults = inject(TUI_TIME_FORMAT);

    protected readonly dayPeriodVariants = [
        this.defaults().dayPeriod,
        ['AM', 'PM'],
        ['a.m.', 'p.m.'],
        ['π.μ.', 'μ.μ.'],
        ['上午', '下午'],
    ] as const satisfies ReadonlyArray<TuiTimeFormatSettings['dayPeriod']>;

    public readonly dayPeriod = signal<TuiTimeFormatSettings['dayPeriod']>(
        this.defaults().dayPeriod,
    );
}
