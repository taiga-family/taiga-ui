import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiFileLike} from '@taiga-ui/kit';
import {TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, ReactiveFormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected removeFile(): void {
        this.control.setValue(null);
    }
}
