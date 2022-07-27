import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {padStart} from '@taiga-ui/cdk';

@Component({
    selector: `tui-format-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample2 {
    parametersForm = new FormGroup({
        sourceString: new FormControl(`Friend!`),
        minResultLength: new FormControl(21),
        padString: new FormControl(`Hey, `),
    });

    get paddedStart(): string {
        const {sourceString, minResultLength, padString} = this.parametersForm.value;

        return padStart(sourceString || ``, minResultLength || 0, padString || ` `);
    }
}
