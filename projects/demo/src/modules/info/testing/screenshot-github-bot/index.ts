import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

export const SCREENSHOT_BOT_NAME = 'Lumberjack';
export const SCREENSHOT_BOT_LINK = 'https://github.com/apps/lumberjack-bot';

@Component({
    standalone: true,
    imports: [TuiDocPageModule, TuiLinkDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScreenshotGithubBotComponent {
    protected readonly botName = SCREENSHOT_BOT_NAME;
    protected readonly botAppLink = SCREENSHOT_BOT_LINK;
    protected readonly botRepoLink = 'https://github.com/taiga-family/argus';
}
