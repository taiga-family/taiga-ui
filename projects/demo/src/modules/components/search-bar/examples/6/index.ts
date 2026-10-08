import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiButtonClose,
        TuiCell,
        TuiRepeatTimes,
        TuiSearchBar,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    hostDirectives: [WaIntersectionObserverDirective, WaIntersectionRoot],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected floating = false;
}
