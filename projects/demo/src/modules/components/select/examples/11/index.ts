import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-select-example-11`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiSelectExample11 {
    itemControl = new FormControl();
    itemGroupControl = new FormControl();

    items = [
        `Luke Skywalker`,
        `Leia Organa Solo`,
        `Darth Vader`,
        `Han Solo`,
        `Obi-Wan Kenobi`,
        `Yoda`,
    ];

    groupItems = [
        [`Caesar`, `Greek`, `Apple and Chicken`],
        [`Broccoli Cheddar`, `Chicken and Rice`, `Chicken Noodle`],
    ];

    labels = [`Salad`, `Soup`];
}
