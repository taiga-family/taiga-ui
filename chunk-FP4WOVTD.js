import"./chunk-HU6DUUP4.js";var o=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiArrayToggle} from '@taiga-ui/cdk';
import {TuiCell, TuiCheckbox, TuiTitle} from '@taiga-ui/core';
import {TuiAccordion, TuiAvatar, TuiConnected} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        KeyValuePipe,
        TuiAccordion,
        TuiAvatar,
        TuiCell,
        TuiCheckbox,
        TuiConnected,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = {
        'First steps': {
            text: 'Getting to know your workplace',
            steps: ['Looks around', 'Talk to colleagues', 'Have lunch'],
        },
        'Work day': {
            text: 'Start working',
            steps: ['Open the project', 'Read the documentation', 'Start coding'],
        },
        Mastery: {
            text: 'Become a pro',
            steps: ['Write tests', 'Refactor the code', 'Deploy the project'],
        },
    };

    protected selected = this.steps['First steps'].steps.concat(
        this.steps['Work day'].steps[0] || '',
    );

    protected isChecked(steps: readonly string[]): boolean {
        return steps.every((step) => this.selected.includes(step));
    }

    protected toggle(step: string): void {
        this.selected = tuiArrayToggle(this.selected, step);
    }

    protected orderBy(): number {
        return 0;
    }
}
`;export{o as default};
