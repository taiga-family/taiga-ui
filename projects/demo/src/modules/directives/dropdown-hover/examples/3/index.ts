import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-hover-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDropdownHoverExample3 {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected readonly selectItems = ['Item 1', 'Item 2'];

    protected open = false;

    protected selected = new FormControl<string | null>(null);
}
