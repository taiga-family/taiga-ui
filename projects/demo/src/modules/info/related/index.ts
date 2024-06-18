import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiSurface} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

import {SCREENSHOT_BOT_LINK, SCREENSHOT_BOT_NAME} from '../testing/screenshot-github-bot';

@Component({
    standalone: true,
    selector: 'related',
    imports: [TuiDemo, TuiCardLarge, TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly screenshotBotName = SCREENSHOT_BOT_NAME;
    protected readonly screenshotBotLink = SCREENSHOT_BOT_LINK;
}
