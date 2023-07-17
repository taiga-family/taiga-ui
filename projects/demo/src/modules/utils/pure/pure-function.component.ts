import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'example-tui-pure-function',
    templateUrl: './pure-function.component.html',
    changeDetection,
})
export class ExampleTuiPureFunctionComponent {
    text = '';

    show = false;

    counter = {
        count: 0,
    };

    @tuiPure
    calculate(counter: {count: number}, text: string): {text: string} {
        counter.count++;

        return {
            text,
        };
    }
}
