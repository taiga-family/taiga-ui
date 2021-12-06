import {Component} from '@angular/core';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-sheet-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiSheetExample2 {
    open = false;

    readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        image: 'assets/images/avatar.jpg',
    };

    toggle() {
        this.open = !this.open;
    }
}
