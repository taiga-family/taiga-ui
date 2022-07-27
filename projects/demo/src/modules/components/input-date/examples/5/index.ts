import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: `tui-input-date-example-5`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputDateExample5 {
    readonly nativeDateControl = new FormControl(new Date(2022, 0, 26));
    readonly defaultControl = new FormControl(new TuiDay(2022, 0, 26));
}
