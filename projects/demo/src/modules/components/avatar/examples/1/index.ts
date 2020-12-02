import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-avatar-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAvatarExample1 {
    avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
}
