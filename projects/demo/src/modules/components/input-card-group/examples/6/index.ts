import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiCard, TuiInputCardGroup} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputCardGroup],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly largeControl = new FormControl<TuiCard | null>(null);
    protected readonly mediumControl = new FormControl<TuiCard | null>(null);
}
