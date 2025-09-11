import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styles: [':host { display: flex; flex-direction: column; gap: 2rem}'],
    encapsulation,
    changeDetection,
})
export default class Example {}
