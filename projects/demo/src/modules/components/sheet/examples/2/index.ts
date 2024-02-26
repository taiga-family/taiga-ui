import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

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
