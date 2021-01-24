import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'tui-button-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiButtonExample4 {}
