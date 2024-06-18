import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiHintDirective, TuiTooltip} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiHintDirective,
        TuiTooltip,
        TuiInputModule,
        TuiHint,
        FormsModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
