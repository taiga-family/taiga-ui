import {Component, ElementRef, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {USER_AGENT} from '@ng-web-apis/common';
import {tuiIsEdge, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-browser-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiBrowserExample1 {
    private readonly userAgent = inject(USER_AGENT);
    private readonly el: Element = inject(ElementRef).nativeElement;

    get aboutMyBrowser(): string {
        if (tuiIsEdge(this.userAgent)) {
            return 'Edge';
        }

        if (tuiIsFirefox(this.userAgent)) {
            return 'Okay, you have Firefox!';
        }

        if (tuiIsSafari(this.el)) {
            return 'Okay, you have Safari!';
        }

        return 'You have Chromium based browser, cool!';
    }
}
