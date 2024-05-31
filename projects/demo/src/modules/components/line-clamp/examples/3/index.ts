import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WINDOW} from '@ng-web-apis/common';
import {TuiLineClampComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLineClampComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly win = inject(WINDOW);

    protected getDynamicLineHeight(element: HTMLDivElement): number {
        return parseInt(this.win.getComputedStyle(element).lineHeight, 10);
    }

    protected getDynamicLineLimit(element: HTMLDivElement): number {
        return Math.floor(element.offsetHeight / 24);
    }
}
