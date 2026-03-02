import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiCheckbox],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly questionTitles = [
        'What framework do you like?',
        'What library do you like?',
    ];

    protected readonly questions = [
        ['Angular', 'React', 'Vue'],
        ['Taiga UI', 'Material UI', 'PrimeNG'],
    ];

    protected currentQuestion = 0;

    protected results: boolean[][] = [];

    protected form = new FormGroup({
        0: new FormControl(false),
        1: new FormControl(false),
        2: new FormControl(false),
    });

    protected nextQuestion(): void {
        this.currentQuestion++;

        this.results.push(Object.values(this.form.value).map(Boolean));

        this.form = new FormGroup({
            0: new FormControl(false),
            1: new FormControl(false),
            2: new FormControl(false),
        });
    }
}
`;export{t as default};
