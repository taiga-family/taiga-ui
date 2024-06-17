import {JsonPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputModule, FormsModule, NgIf, TuiButton, JsonPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected text = '';

    protected show = false;

    protected counter = {
        count: 0,
    };

    @tuiPure
    protected calculate(counter: {count: number}, text: string): {text: string} {
        counter.count++;

        return {
            text,
        };
    }
}
