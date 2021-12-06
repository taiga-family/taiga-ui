import {Component} from '@angular/core';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-sheet-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample3 {
    open = false;

    readonly options: Partial<TuiSheetOptions> = {
        stops: ['calc(5rem + 74vw)', 'calc(9rem + 74vw)'],
        image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg',
    };

    toggle() {
        this.open = !this.open;
    }
}
