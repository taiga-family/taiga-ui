import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiProgress, TuiTooltip} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiProgress,
        TuiSurface,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
