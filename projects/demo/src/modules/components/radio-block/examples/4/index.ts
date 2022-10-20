import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-radio-block-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiRadioBlockExample4 {
    readonly items = [`Kiwi`, `Orange`, `Apple`];
    readonly form = new FormGroup({
        control: new FormControl(this.items[1]),
    });
}
