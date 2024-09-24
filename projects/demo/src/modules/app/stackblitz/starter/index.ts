import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {environment} from '@demo/environments/environment';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiLoader} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLoader],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    constructor() {
        inject(WA_WINDOW).location.replace(environment.playground);
    }
}
