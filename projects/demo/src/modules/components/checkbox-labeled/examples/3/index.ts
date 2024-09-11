import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-checkbox-labeled-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCheckboxLabeledExample3 {
    readonly questionTitles = ['Which prefer?', 'Which prefer again?'];

    readonly questions = [
        ['Angular', 'React', 'Vue'],
        ['Svelte', 'Ember', 'React'],
    ];

    currentQuestion = 0;

    results: boolean[][] = [];

    form = new FormGroup({
        0: new FormControl(false),
        1: new FormControl(false),
        2: new FormControl(false),
    });

    trackByIndex(index: number): number {
        return index;
    }

    nextQuestion(): void {
        this.currentQuestion++;

        this.results.push(Object.values(this.form.value).map(Boolean));

        this.form = new FormGroup({
            0: new FormControl(false),
            1: new FormControl(false),
            2: new FormControl(false),
        });
    }
}
