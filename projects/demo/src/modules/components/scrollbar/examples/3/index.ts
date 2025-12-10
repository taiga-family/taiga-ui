import {Component, ElementRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';

const SOME_OFFSET_CONST = 20;

@Component({
    imports: [TuiButton, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly scrollBar = viewChild(TuiScrollbar, {read: ElementRef});

    protected someOffsetConst = SOME_OFFSET_CONST;

    protected get scrollTop(): number {
        const scrollBar = this.scrollBar();

        return scrollBar ? scrollBar.nativeElement.scrollTop : 0;
    }

    protected get scrollLeft(): number {
        const scrollBar = this.scrollBar();

        return scrollBar ? scrollBar.nativeElement.scrollLeft : 0;
    }

    protected onClick(): void {
        const scrollBar = this.scrollBar();

        if (!scrollBar) {
            return;
        }

        const {nativeElement} = scrollBar;

        nativeElement.scrollTop =
            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;
    }
}
