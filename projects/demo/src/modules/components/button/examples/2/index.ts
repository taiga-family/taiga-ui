import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-button-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiButtonExample2 {}
