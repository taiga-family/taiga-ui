import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'example-tui-pure-function',
    templateUrl: './pure-function.component.html',
    changeDetection,
})
export class ExampleTuiPureFunctionComponent {
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
