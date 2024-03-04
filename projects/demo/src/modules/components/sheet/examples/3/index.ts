import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiSheetOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: 'tui-sheet-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSheetExample3 {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        stops: ['calc(5rem + 74vw)', 'calc(9rem + 74vw)'],
        image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg',
    };

    protected toggle(): void {
        this.open = !this.open;
    }
}
