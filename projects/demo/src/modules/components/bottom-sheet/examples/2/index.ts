import {Component, type ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBottomSheet, TuiHeader, TuiTitle, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('buttons')
    protected readonly button?: ElementRef<HTMLElement>;
    protected readonly stops = ['112px'] as const;

    protected onScroll({clientHeight, scrollTop}: HTMLElement) {
        const offset = Number.parseInt(this.stops[0], 10);
        const top = Math.min(scrollTop, clientHeight - offset);

        this.button?.nativeElement.style.setProperty(
            'transform',
            `translate3d(0, -${top}px, 0)`,
        );
    }
}
