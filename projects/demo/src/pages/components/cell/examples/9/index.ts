import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearance,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiIcon,
    TuiLoader,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiBadgeNotification, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAppearance,
        TuiBadgeNotification,
        TuiButton,
        TuiCell,
        TuiCheckbox,
        TuiIcon,
        TuiLoader,
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
