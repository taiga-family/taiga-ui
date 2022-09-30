import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbarComponent} from '@taiga-ui/core';

const SOME_OFFSET_CONST = 20;

@Component({
    selector: `tui-scrollbar-example-3`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
})
export class TuiScrollbarExample3Component {
    @ViewChild(TuiScrollbarComponent, {read: ElementRef})
    private readonly scrollBar?: ElementRef<HTMLElement>;

    SOME_OFFSET_CONST = SOME_OFFSET_CONST;

    get scrollTop(): number {
        return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;
    }

    get scrollLeft(): number {
        return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;
    }

    onClick(): void {
        if (!this.scrollBar) {
            return;
        }

        const {nativeElement} = this.scrollBar;

        nativeElement.scrollTop =
            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;
    }
}
