import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButtonX, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAvatar,
        TuiButtonX,
        TuiCell,
        TuiSearchBar,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
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
    protected readonly floating = signal(false);
}
