import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbarComponent} from '@taiga-ui/core';

const SOME_OFFSET_CONST = 20;

@Component({
    selector: 'tui-scrollbar-example-3',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    encapsulation,
    changeDetection,
})
export class TuiScrollbarExample3Component {
    @ViewChild(TuiScrollbarComponent, {read: ElementRef})
    private readonly scrollBar?: ElementRef<HTMLElement>;

    protected SOME_OFFSET_CONST = SOME_OFFSET_CONST;

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
