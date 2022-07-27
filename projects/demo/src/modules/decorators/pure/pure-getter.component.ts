import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: `example-tui-pure-getter`,
    template: `
        <div
            *ngIf="show"
            class="tui-space_bottom-2"
        >
            fibonacci(42) = {{ fibonacci42 }}
        </div>
        <button
            tuiButton
            type="button"
            (click)="show = !show"
        >
            Show/hide
        </button>
    `,
    changeDetection,
})
export class ExampleTuiPureGetterComponent {
    @tuiPure
    get fibonacci42(): number {
        return this.fibonacci(42);
    }

    show = false;

    private fibonacci(num: number): number {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
