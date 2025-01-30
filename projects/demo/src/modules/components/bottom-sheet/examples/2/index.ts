import type {ElementRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBottomSheet, TuiButton, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('buttons')
    protected readonly button?: ElementRef<HTMLElement>;

    protected readonly stops = ['112px'] as const;

    protected onScroll({clientHeight, scrollTop}: HTMLElement): void {
        const offset = Number.parseInt(this.stops[0], 10);
        const top = Math.min(scrollTop, clientHeight - offset);
        const transform = `translate3d(0, ${-top}px, 0)`;

        this.button?.nativeElement.style.setProperty('transform', transform);
    }
}
