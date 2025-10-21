import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose, TuiFade} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiPlatform} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiButtonClose,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
        TuiAvatar,
        TuiCell,
        TuiAppearance,
        TuiFade,
        TuiPlatform,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
