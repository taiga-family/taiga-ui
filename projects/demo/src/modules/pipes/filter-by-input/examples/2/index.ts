import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-filter-by-input-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiFilterByInputExample2 {
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

    readonly matcher = (name: string, search: string) =>
        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());
}
