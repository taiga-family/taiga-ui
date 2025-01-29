import {Component, ElementRef, ViewChild} from '@angular/core';
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
    host: {
        '[style.--top]': 'top',
    },
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild(TuiBottomSheet, {read: ElementRef})
    private readonly sheet?: ElementRef<HTMLElement>;

    protected top = 0;

    protected onScroll() {
        this.top = this.sheet?.nativeElement.scrollTop || 0;
    }
}
