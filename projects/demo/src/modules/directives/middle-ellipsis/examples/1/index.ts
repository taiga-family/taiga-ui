import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiMiddleEllipsis} from '@taiga-ui/kit';
import {TuiCard, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiBadge,
        TuiCard,
        TuiCell,
        TuiIcon,
        TuiMiddleEllipsis,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
