import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';

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
