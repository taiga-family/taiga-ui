import {Component} from '@angular/core';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-sheet-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample5 {
    open = false;

    readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: ['4.5rem'],
    };

    toggle() {
        this.open = !this.open;
    }
}
