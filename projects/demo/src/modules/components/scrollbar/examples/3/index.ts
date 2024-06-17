import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiScrollbarComponent} from '@taiga-ui/core';

const SOME_OFFSET_CONST = 20;

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiScrollbarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
