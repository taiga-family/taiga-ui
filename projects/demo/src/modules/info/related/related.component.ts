import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiActionModule, TuiIslandModule} from '@taiga-ui/kit';

import {
    SCREENSHOT_BOT_LINK,
    SCREENSHOT_BOT_NAME,
} from '../testing/screenshot-github-bot/screenshot-github-bot.component';

@Component({
    standalone: true,
    selector: 'related',
    imports: [TuiDocPageModule, TuiIslandModule, TuiActionModule, TuiLinkModule],
    templateUrl: './related.template.html',
    styleUrls: ['./related.style.less'],
    changeDetection,
})
export default class RelatedComponent {
    protected readonly screenshotBotName = SCREENSHOT_BOT_NAME;
    protected readonly screenshotBotLink = SCREENSHOT_BOT_LINK;
}
