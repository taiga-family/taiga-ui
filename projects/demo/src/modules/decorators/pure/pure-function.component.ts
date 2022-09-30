import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: `example-tui-pure-function`,
    template: `
        <tui-input [(ngModel)]="text">Type a text to start computing</tui-input>
        <div class="tui-space_top-2">Called times: {{ counter.count }}</div>
        <div
            *ngIf="show"
            class="tui-space_top-2"
        >
            Result: {{ calculate(counter, text) | json }}
        </div>
        <button
            tuiButton
            type="button"
            class="tui-space_top-2"
            (click)="show = !show"
        >
            Show/hide
        </button>
    `,
    changeDetection,
})
export class ExampleTuiPureFunctionComponent {
    text = ``;

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
