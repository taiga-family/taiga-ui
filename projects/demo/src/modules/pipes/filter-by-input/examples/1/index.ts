import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-filter-by-input-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiFilterByInputExample1 {
    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly form = new FormGroup({
        user: new FormControl(''),
    });
}
