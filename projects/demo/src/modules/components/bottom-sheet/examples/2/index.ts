import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {tuiInjectElement} from '@taiga-ui/cdk';
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
    @ViewChild(TuiBottomSheet, {read: ElementRef})
    private readonly sheet?: ElementRef<HTMLElement>;
    private readonly el = tuiInjectElement();

    protected onScroll() {
        this.el.style.setProperty(
            '--top',
            String(this.sheet?.nativeElement.scrollTop || 0),
        );
    }
}
