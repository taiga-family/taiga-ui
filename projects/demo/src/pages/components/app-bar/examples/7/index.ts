import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiTitle,
        WaIntersectionObserver,
        TuiPlatform,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: true}],
})
export default class Example {
    protected readonly blur = signal(false);
}
