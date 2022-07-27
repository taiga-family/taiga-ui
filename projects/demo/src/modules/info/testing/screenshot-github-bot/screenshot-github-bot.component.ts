import {Component} from '@angular/core';

export const SCREENSHOT_BOT_NAME = `Lumberjack`;
export const SCREENSHOT_BOT_LINK = `https://github.com/apps/lumberjack-bot`;

@Component({
    selector: `screenshot-github-bot`,
    templateUrl: `./screenshot-github-bot.template.html`,
    styleUrls: [`./screenshot-github-bot.style.less`],
})
export class ScreenshotGithubBotComponent {
    readonly botName = SCREENSHOT_BOT_NAME;
    readonly botAppLink = SCREENSHOT_BOT_LINK;
    readonly botRepoLink = `https://github.com/tinkoff/argus`;
}
