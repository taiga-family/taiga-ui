import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {padStart} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-format-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample2 {
    parametersForm = new FormGroup({
        sourceString: new FormControl('друг!'),
        minResultLength: new FormControl(21),
        padString: new FormControl('привет, '),
    });

    get paddedStart(): string {
        const {sourceString, minResultLength, padString} = this.parametersForm.value;

        return padStart(sourceString || '', minResultLength || 0, padString || ' ');
    }
}
