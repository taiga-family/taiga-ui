import {Component} from '@angular/core';
import type {TuiSheetOptions} from '@taiga-ui/addon-mobile';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-sheet-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSheetExample2 {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        image: 'assets/images/avatar.jpg',
    };

    protected toggle(): void {
        this.open = !this.open;
    }
}
