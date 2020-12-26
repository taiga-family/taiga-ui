import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-pure-function',
    template: `
        <tui-input [(ngModel)]="text"
            >Type a text to start computing/tui-input>
            <div>Called times: {{ counter.count }}</div>
            <div *ngIf="show">Result: {{ calculate(counter, text) | json }}</div>
            <button tuiButton type="button" (click)="show = !show">Show/hide</button>
        </tui-input>
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
