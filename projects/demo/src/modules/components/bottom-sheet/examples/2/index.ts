import {Component} from '@angular/core';
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
    private readonly el = tuiInjectElement();

    protected readonly stops = ['112px'] as const;

    protected onScroll({clientHeight, scrollTop}: HTMLElement) {
        const offset = Number.parseInt(this.stops[0], 10);
        const top = Math.min(scrollTop, clientHeight - offset);

        this.el.style.setProperty('--top', String(top));
    }
}
