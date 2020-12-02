import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-badged-content-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBadgedContentExample3 {
    avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
    badgeStatus = 'success';
    badgeValue = 64;
    notification = 'error';
    rounded = true;
    size = 'l';
}
