import {Component, ElementRef, ViewChild} from '@angular/core';
import {TuiScrollbarComponent} from '@taiga-ui/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const SOME_OFFSET_CONST = 20;

@Component({
    selector: 'tui-scrollbar-example-3',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiScrollbarExample3Component {
    SOME_OFFSET_CONST = SOME_OFFSET_CONST;

    @ViewChild(TuiScrollbarComponent, {read: ElementRef})
    private scrollBar?: ElementRef<HTMLElement>;

    get scrollTop(): number {
        return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;
    }

    get scrollLeft(): number {
        return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;
    }

    onClick() {
        if (!this.scrollBar) {
            return;
        }

        const {nativeElement} = this.scrollBar;

        nativeElement.scrollTop =
            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;
    }
}
