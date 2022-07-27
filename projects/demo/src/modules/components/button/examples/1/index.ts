import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';

@Component({
    selector: `tui-button-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiButtonExample1 {
    readonly avatarUrl = avatar;

    onClick(event: MouseEvent): void {
        console.info(`click`, event);
    }
}
