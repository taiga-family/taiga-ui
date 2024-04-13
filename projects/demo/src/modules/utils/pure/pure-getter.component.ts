import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-tui-pure-getter',
    templateUrl: './pure-getter.component.html',
    changeDetection,
})
export class ExampleTuiPureGetterComponent {
    protected show = false;

    @tuiPure
    protected get fibonacci42(): number {
        return this.fibonacci(42);
    }

    private fibonacci(num: number): number {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
