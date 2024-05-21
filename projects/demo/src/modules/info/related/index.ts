import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiCardLargeDirective} from '@taiga-ui/layout';

import {SCREENSHOT_BOT_LINK, SCREENSHOT_BOT_NAME} from '../testing/screenshot-github-bot';

@Component({
    standalone: true,
    selector: 'related',
    imports: [TuiDemo, TuiIslandModule, TuiLinkDirective, TuiCardLargeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly screenshotBotName = SCREENSHOT_BOT_NAME;
    protected readonly screenshotBotLink = SCREENSHOT_BOT_LINK;
}
