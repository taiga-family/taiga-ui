import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiRadio} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiFloatingContainer,
        TuiHeader,
        TuiLabel,
        TuiRadio,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
