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
    private readonly scrollBar = viewChild(TuiScrollbar, {read: ElementRef<HTMLElement>});
    protected someOffsetConst = SOME_OFFSET_CONST;

    protected get scrollTop(): number {
        return this.scrollBar()?.nativeElement.scrollTop ?? 0;
    }

    protected get scrollLeft(): number {
        return this.scrollBar()?.nativeElement.scrollLeft ?? 0;
    }

    protected onClick(): void {
        const scrollbar = this.scrollBar();

        if (!scrollbar) {
            return;
        }

        scrollbar.nativeElement.scrollTop =
            scrollbar.nativeElement.scrollTop < SOME_OFFSET_CONST
                ? scrollbar.nativeElement.scrollHeight
                : 0;
    }
}
