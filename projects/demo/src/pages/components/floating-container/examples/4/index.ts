import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiLabel, TuiRadio, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
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
