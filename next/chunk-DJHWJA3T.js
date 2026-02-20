import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {of, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly animationDisabled =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

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
`;export{o as default};
