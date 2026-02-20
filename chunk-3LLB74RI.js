import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiCheckbox, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgeNotification, TuiSensitive, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiBadgeNotification,
        TuiCell,
        TuiCheckbox,
        TuiIcon,
        TuiLoader,
        TuiSensitive,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}
`;export{o as default};
