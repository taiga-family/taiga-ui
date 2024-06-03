import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgIf, TuiButtonDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected show = false;

    @tuiPure
    protected get fibonacci42(): number {
        return this.fibonacci(42);
    }

    private fibonacci(num: number): number {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
