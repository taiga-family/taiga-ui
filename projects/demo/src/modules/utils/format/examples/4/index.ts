import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {capitalize} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-format-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample4 {
    parametersForm = new FormGroup({
        value: new FormControl('седов рОмАн андреевич'),
    });

    get capitalized(): string {
        const {value} = this.parametersForm.value;

        return capitalize(value);
    }
}
