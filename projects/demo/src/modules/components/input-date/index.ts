import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {}
