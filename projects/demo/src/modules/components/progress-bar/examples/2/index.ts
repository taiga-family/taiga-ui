import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextCode} from '@taiga-ui/addon-doc';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiProgressModule} from '@taiga-ui/kit';
import {of, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiTextCode, TuiProgressModule, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly animationDisabled =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

    protected readonly fastValue$ = this.animationDisabled ? of(80) : timer(500, 100);
    protected readonly slowValue$ = this.animationDisabled ? of(4) : timer(500, 2000);
    protected readonly colors = [
        'var(--tui-chart-categorical-01)',
        'var(--tui-chart-categorical-21)',
        'lightskyblue',
        '#3682db',
        'var(--tui-background-accent-1)',
    ];
}
