import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-button-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiButtonExample1 {
    readonly avatarUrl = avatar;

    onClick(event: MouseEvent) {
        console.log('click', event);
    }
}
