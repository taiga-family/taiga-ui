import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-filter-by-input-example1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiFilterByInputExample1 {
    readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    readonly form = new FormGroup({
        user: new FormControl(),
    });
}
