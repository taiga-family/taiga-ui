import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {
    SCREENSHOT_BOT_LINK,
    SCREENSHOT_BOT_NAME,
} from '../testing/screenshot-github-bot/screenshot-github-bot.component';

@Component({
    selector: `related`,
    templateUrl: `related.template.html`,
    styleUrls: [`./related.style.less`],
    changeDetection,
})
export class RelatedComponent {
    readonly screenshotBotName = SCREENSHOT_BOT_NAME;
    readonly screenshotBotLink = SCREENSHOT_BOT_LINK;
}
