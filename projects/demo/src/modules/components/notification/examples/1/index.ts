import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-notification-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection,
    encapsulation,
})
export class TuiNotificationExample1 {}
