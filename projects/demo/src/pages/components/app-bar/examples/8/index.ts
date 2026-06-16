import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_DARK_MODE, TUI_LIQUID_GLASS, TuiTitle} from '@taiga-ui/core';
import {TuiAppBar, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: signal(true)}],
})
export default class Example {
    protected readonly mode = inject(TUI_DARK_MODE);
    protected readonly colors = ['#2f3f5b', '#3a3f66', '#5a2f3f', '#3f4e37', '#5a3851'];
    protected readonly color = signal('');
    protected readonly blur = signal(false);
    protected onIntersection(isIntersecting: boolean, color: string): void {
        if (isIntersecting) {
            this.color.set(color);
        } else if (this.color() === color) {
            this.color.set('');
        }
    }
}
