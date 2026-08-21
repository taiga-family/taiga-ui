import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone, TuiAnimated} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiActiveZone,
        TuiAnimated,
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiSearchbar,
        TuiTitle,
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
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected readonly active = signal(false);

    protected cancel(input: HTMLInputElement): void {
        input.value = '';
        input.focus();
        input.blur();
    }
}
