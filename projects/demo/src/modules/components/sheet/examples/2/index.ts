import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: `tui-sheet-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiSheetExample2 {
    open = false;

    readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        image: `assets/images/avatar.jpg`,
    };

    toggle(): void {
        this.open = !this.open;
    }
}
