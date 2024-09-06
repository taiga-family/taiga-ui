import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiHintDirective, TuiIcon} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiButton,
        TuiHint,
        TuiHintDirective,
        TuiIcon,
        TuiInputModule,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
