import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiButton,
    TuiHintDescribeDirective,
    TuiHintDirective,
    TuiHintOptionsDirective,
    TuiTooltip,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiHintDirective,
        TuiHintDescribeDirective,
        TuiTooltip,
        TuiInputModule,
        TuiHintOptionsDirective,
        FormsModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
