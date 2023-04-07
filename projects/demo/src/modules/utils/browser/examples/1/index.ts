import {Component, ElementRef, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {USER_AGENT} from '@ng-web-apis/common';
import {tuiIsEdge, tuiIsEdgeOlderThan, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-browser-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBrowserExample1 {
    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(ElementRef) private readonly el: ElementRef,
    ) {}

    get aboutMyBrowser(): string {
        if (tuiIsEdge(this.userAgent)) {
            return tuiIsEdgeOlderThan(13, this.userAgent)
                ? 'Edge older than 13'
                : 'Edge until 13';
        }

        if (tuiIsFirefox(this.userAgent)) {
            return 'Okay, you have Firefox!';
        }

        if (tuiIsSafari(this.el.nativeElement)) {
            return 'Okay, you have Safari!';
        }

        return 'You have Chromium based browser, cool!';
    }
}
