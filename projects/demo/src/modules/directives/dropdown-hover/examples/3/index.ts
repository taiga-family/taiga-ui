import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-hover-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownHoverExample3 {
    readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    readonly selectItems = ['Item 1', 'Item 2'];

    open = false;

    selected = new FormControl();
}
