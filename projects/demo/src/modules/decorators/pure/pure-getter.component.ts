import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-pure-getter',
    template: `
        <div *ngIf="show">fibonacci(40) = {{ fibonacci40 }}</div>
        <button tuiButton type="button" (click)="show = !show">Show/hide</button>
    `,
    changeDetection,
})
export class ExampleTuiPureGetterComponent {
    @tuiPure
    get fibonacci40(): number {
        return this.fibonacci(40);
    }

    show = false;

    private fibonacci(num: number): number {
        return num <= 1 ? 1 : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
