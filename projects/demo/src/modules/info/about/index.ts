import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAppearance, TuiIcon} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

import {SCREENSHOT_BOT_LINK, SCREENSHOT_BOT_NAME} from '../testing/screenshot-github-bot';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    selector: 'related',
    imports: [TuiAppearance, TuiCardLarge, TuiDemo, TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly screenshotBotName = SCREENSHOT_BOT_NAME;
    protected readonly screenshotBotLink = SCREENSHOT_BOT_LINK;
}
