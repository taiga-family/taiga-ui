import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-select-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiSelectExample1 {
    items = [
        `Luke Skywalker`,
        `Leia Organa Solo`,
        `Darth Vader`,
        `Han Solo`,
        `Obi-Wan Kenobi`,
        `Yoda`,
    ];

    testValue = new FormControl();
}
