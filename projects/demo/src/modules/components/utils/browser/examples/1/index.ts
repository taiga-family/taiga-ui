import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {USER_AGENT} from '@ng-web-apis/common';
import {tuiInjectElement, tuiIsEdge, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly userAgent = inject(USER_AGENT);
    private readonly el = tuiInjectElement();

    protected get aboutMyBrowser(): string {
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
