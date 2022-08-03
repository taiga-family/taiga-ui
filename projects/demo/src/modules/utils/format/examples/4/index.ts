import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCapitalize} from '@taiga-ui/core';

@Component({
    selector: `tui-format-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample4 {
    parametersForm = new FormGroup({
        value: new FormControl(`roman sEdOv`),
    });

    get capitalized(): string {
        const {value} = this.parametersForm.value;

        return tuiCapitalize(value);
    }
}
