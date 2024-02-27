import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

export const SCREENSHOT_BOT_NAME = 'Lumberjack';
export const SCREENSHOT_BOT_LINK = 'https://github.com/apps/lumberjack-bot';

@Component({
    standalone: true,
    selector: 'screenshot-github-bot',
    imports: [TuiDocPageModule, TuiLinkModule],
    templateUrl: './screenshot-github-bot.template.html',
    styleUrls: ['./screenshot-github-bot.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScreenshotGithubBotComponent {
    protected readonly botName = SCREENSHOT_BOT_NAME;
    protected readonly botAppLink = SCREENSHOT_BOT_LINK;
    protected readonly botRepoLink = 'https://github.com/taiga-family/argus';
}
