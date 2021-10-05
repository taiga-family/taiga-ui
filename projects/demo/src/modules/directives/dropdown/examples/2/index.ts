import {default as avatarUrl} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-dropdown-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownExample2 {
    open = false;

    avatarUrl = avatarUrl;

    onMouseEnter() {
        this.open = true;
    }

    onMouseLeave() {
        this.open = false;
    }
}
