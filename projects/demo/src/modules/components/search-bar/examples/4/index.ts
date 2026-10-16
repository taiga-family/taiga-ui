import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        TuiActiveZone,
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiButtonClose,
        TuiCell,
        TuiRepeatTimes,
        TuiSearchBar,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected active = false;
}
