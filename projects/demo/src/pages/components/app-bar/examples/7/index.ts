import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar, TuiAppBarBack, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAppBarBack,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_LIQUID_GLASS,
            useValue: true,
        },
    ],
})
export default class Example {}
