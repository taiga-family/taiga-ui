import"./chunk-42JZD6NG.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected show = false;

    @tuiPure
    protected get fibonacci42(): number {
        return this.fibonacci(42);
    }

    private fibonacci(num: number): number {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
`;export{i as default};
