import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';

@Component({
    selector: 'tui-button-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiButtonExample1 {
    readonly avatarUrl = assets`/images/avatar.jpg`;

    onClick(event: MouseEvent): void {
        console.info('click', this.avatarUrl, event);
    }
}
