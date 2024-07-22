import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLineClamp],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly win = inject(WA_WINDOW);

    protected getDynamicLineHeight(element: HTMLDivElement): number {
        return parseInt(this.win.getComputedStyle(element).lineHeight, 10);
    }

    protected getDynamicLineLimit(element: HTMLDivElement): number {
        return Math.floor(element.offsetHeight / 24);
    }
}
