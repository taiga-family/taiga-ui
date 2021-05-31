import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-pure-function',
    template: `
        <tui-input [(ngModel)]="text"> Type a text to start computing </tui-input>
        <div class="tui-space_top-2">Called times: {{ counter.count }}</div>
        <div *ngIf="show" class="tui-space_top-2">
            Result: {{ calculate(counter, text) | json }}
        </div>
        <button tuiButton class="tui-space_top-2" type="button" (click)="show = !show">
            Show/hide
        </button>
    `,
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
