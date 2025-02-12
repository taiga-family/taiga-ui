import type {ElementRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-bottom-sheet-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBottomSheetExample2 {
    @ViewChild('buttons')
    readonly button?: ElementRef<HTMLElement>;

    readonly stops = ['112px'] as const;

    onScroll({clientHeight, scrollTop}: HTMLElement): void {
        const offset = Number.parseInt(this.stops[0], 10);
        const top = Math.min(scrollTop, clientHeight - offset);
        const transform = `translate3d(0, ${-top}px, 0)`;

        this.button?.nativeElement.style.setProperty('transform', transform);
    }
}
