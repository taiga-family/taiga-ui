import"./chunk-HU6DUUP4.js";var l=`import {Component, ElementRef, ViewChild} from '@angular/core';
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
    @ViewChild(TuiScrollbar, {read: ElementRef})
    private readonly scrollBar?: ElementRef<HTMLElement>;

    protected someOffsetConst = SOME_OFFSET_CONST;

    protected get scrollTop(): number {
        return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;
    }

    protected get scrollLeft(): number {
        return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;
    }

    protected onClick(): void {
        if (!this.scrollBar) {
            return;
        }

        const {nativeElement} = this.scrollBar;

        nativeElement.scrollTop =
            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;
    }
}
`;export{l as default};
