import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiButtonDirective,
    TuiHintDescribeDirective,
    TuiHintDirective,
    TuiHintOptionsDirective,
    TuiTooltip,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
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
