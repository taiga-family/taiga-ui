import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLargeDirective} from '@taiga-ui/layout';

import {SCREENSHOT_BOT_LINK, SCREENSHOT_BOT_NAME} from '../testing/screenshot-github-bot';

@Component({
    standalone: true,
    selector: 'related',
    imports: [TuiDemo, TuiLinkDirective, TuiCardLargeDirective, TuiSurfaceDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly screenshotBotName = SCREENSHOT_BOT_NAME;
    protected readonly screenshotBotLink = SCREENSHOT_BOT_LINK;
}
