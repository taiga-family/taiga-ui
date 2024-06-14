import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiTooltip} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButton, TuiHint, TuiTooltip, TuiInputModule, FormsModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
